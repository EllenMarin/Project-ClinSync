"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  BarChart, 
  Settings, 
  Menu, 
  X,
  Heart,
  PhoneCall,
  Clipboard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import ProfileImage from '../profile-image';
import { LogoutButton } from './logout-button';

// Tipos para melhor tipagem
type UserRole = "admin" | "doctor" | "patient";

type MenuItem = {
  name: string;
  href?: string;
  icon: any;
  access: UserRole[];
  children?: {
    name: string;
    href: string;
    access?: UserRole[];
  }[];
};

// Constantes
const ALL_ROLES: UserRole[] = ["admin", "doctor", "patient"];
const ADMIN_DOCTOR_ROLES: UserRole[] = ["admin", "doctor"];
const ADMIN_ONLY: UserRole[] = ["admin"];

const SIDEBAR_LINKS: MenuItem[] = [
  { 
    name: 'Dashboard', 
    icon: LayoutDashboard,
    access: ALL_ROLES,
    children: [
      { name: 'Dashboard', href: '/' },
      { name: 'Profile', href: '/profile' },
    ],
  },
  { 
    name: 'Patients', 
    href: '/patients', 
    icon: Users, 
    access: ADMIN_DOCTOR_ROLES 
  },
  { 
    name: 'Doctors', 
    href: '/doctors', 
    icon: Clipboard, 
    access: ADMIN_ONLY 
  },
  { 
    name: 'Appintments', 
    icon: Calendar,
    access: ALL_ROLES,
    children: [
      { name: 'My Appintments', href: '/appointments' },
      { name: 'Appointments List', href: '/appointments-list', access: ADMIN_ONLY },
      { name: 'Booking', href: '/booking' },
    ],
  },
  { 
    name: 'Doctors Record', 
    href: '/records', 
    icon: FileText, 
    access: ADMIN_DOCTOR_ROLES 
  },
  { 
    name: 'Reports', 
    href: '/reports', 
    icon: BarChart, 
    access: ADMIN_DOCTOR_ROLES 
  },
  { 
    name: 'Settings', 
    href: '/settings', 
    icon: Settings, 
    access: ALL_ROLES 
  },
];

const CONTACT_INFO = {
  phone: '+351 912 345 678',
  label: 'Ligue-nos'
};

interface SidebarProps {
  role: UserRole;
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  // Funções auxiliares
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  
  const toggleSubmenu = (menuName: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const hasAccess = (requiredRoles: UserRole[]) => requiredRoles.includes(role);
  
  const isMenuItemActive = (href?: string) => pathname === href;
  
  const getFilteredChildren = (children?: MenuItem['children']) => {
    if (!children) return [];
    return children.filter(child => 
      !child.access || hasAccess(child.access)
    );
  };

  // Componentes internos
  const MobileHeader = () => (
    <div className="fixed top-0 left-0 right-0 z-40 flex h-16 items-center border-b bg-background px-4 lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="mr-2"
        onClick={toggleMobileMenu}
        aria-label="Abrir menu"
      >
        <Menu className="h-6 w-6" />
      </Button>
      <div className="flex items-center">
        <Heart className="h-6 w-6 text-primary" />
        <span className="ml-2 text-xl font-bold">ClinSync</span>
      </div>
    </div>
  );

  const SidebarHeader = () => (
    <div className="flex h-16 items-center border-b px-6">
      <Link href="/" className="flex items-center">
        <Heart className="h-6 w-6 text-primary" />
        <span className="ml-2 text-xl font-bold">ClinSync</span>
      </Link>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-4 lg:hidden"
        onClick={closeMobileMenu}
        aria-label="Fechar menu"
      >
        <X className="h-5 w-5" />
      </Button>
    </div>
  );

  const SubmenuItem = ({ child }: { child: NonNullable<MenuItem['children']>[0] }) => {
    const isActive = isMenuItemActive(child.href);
    
    return (
      <Link
        key={child.name}
        href={child.href}
        className={cn(
          "block rounded-md px-3 py-2 text-sm transition-colors",
          isActive
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        )}
        onClick={closeMobileMenu}
      >
        {child.name}
      </Link>
    );
  };

  const MenuItemWithSubmenu = ({ item }: { item: MenuItem }) => {
    const isExpanded = expandedMenus[item.name];
    const filteredChildren = getFilteredChildren(item.children);
    const Icon = item.icon;

    if (filteredChildren.length === 0) return null;

    return (
      <div key={item.name}>
        <button
          onClick={() => toggleSubmenu(item.name)}
          className={cn(
            "flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-sm font-medium transition-colors",
            isExpanded
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
          aria-expanded={isExpanded}
        >
          <Icon className="h-7 w-7 bg-primary-foreground rounded-md p-1.5" />
          <span className="flex-1 text-left">{item.name}</span>
        </button>
        
        {isExpanded && (
          <div className="ml-6 space-y-1">
            {filteredChildren.map((child) => (
              <SubmenuItem key={child.name} child={child} />
            ))}
          </div>
        )}
      </div>
    );
  };

  const SimpleMenuItem = ({ item }: { item: MenuItem }) => {
    const isActive = isMenuItemActive(item.href);
    const Icon = item.icon;

    return (
      <Link
        key={item.href}
        href={item.href!}
        className={cn(
          "flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
          isActive
            ? "bg-primary-foreground text-muted-foreground"
            : "text-muted-foreground hover:bg-primary-foreground hover:text-muted-foreground"
        )}
        onClick={closeMobileMenu}
      >
        <Icon className="mr-3 h-7 w-7 bg-primary-foreground rounded-md p-1.5" />
        {item.name}
      </Link>
    );
  };

  const ContactSection = () => (
    <div className="border-t p-4">
      <div className="flex items-center bg-primary p-3 gap-2 rounded-md">
        <div className="h-10 w-10 flex items-center justify-center">
          <PhoneCall className="w-7 h-7 text-white" />
        </div>
        <div>
          <p className="text-medium font-bold text-white">{CONTACT_INFO.phone}</p>
          <p className="text-medium text-white">{CONTACT_INFO.label}</p>
        </div>
      </div>
    </div>
  );

  const filteredMenuItems = SIDEBAR_LINKS.filter(item => hasAccess(item.access));

  return (
    <>
      <MobileHeader />
      
      <aside
        className={cn(
          "min-h-screen flex flex-col fixed inset-y-0 left-0 z-50 w-64 border-r bg-card transition-transform lg:translate-x-0 lg:bg-background",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarHeader />
        <ProfileImage />
        
        <ScrollArea className="flex-1 py-4 border-t flex-grow overflow-auto">
          <nav className="px-2 space-y-1">
            {filteredMenuItems.map((item) => (
              item.children ? (
                <MenuItemWithSubmenu key={item.name} item={item} />
              ) : (
                <SimpleMenuItem key={item.name} item={item} />
              )
            ))}
            <LogoutButton />
          </nav>
        </ScrollArea>

        <ContactSection />
      </aside>
      
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={closeMobileMenu}
        />
      )}
      
      <div className="lg:pl-64 pt-16 lg:pt-0">
        {/* Espaço para o conteúdo principal */}
      </div>
    </>
  );
}