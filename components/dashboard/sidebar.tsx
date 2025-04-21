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
  LogIn,
  Clipboard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { set } from 'date-fns';

const sidebarLinks = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Patients', href: '/patients', icon: Users },
  { name: 'Doctors', href: '/doctors', icon: Clipboard },
  { name: 'Appointments', href: '/appointments', icon: Calendar },
  { name: 'Medical Records', href: '/records', icon: FileText },
  { name: 'Reports', href: '/reports', icon: BarChart },
  { name: 'Settings', href: '/settings', icon: Settings },
  { 
    name: 'Login/Signup', 
    icon: LogIn,
    children: [
      { name: 'Login', href: '/login' },
      { name: 'Signup', href: '/signup' },
      { name: 'Forgot Password', href: '/forgot-password' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 flex h-16 items-center border-b bg-background px-4 lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="mr-2"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <div className="flex items-center">
          <Heart className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">ClinSync</span>
        </div>
      </div>
      
      <aside
        className={cn(
          "min-h-screen flex flex-col fixed inset-y-0 left-0 z-50 w-64 border-r bg-card transition-transform lg:translate-x-0 lg:bg-background ",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/" className="flex items-center">
            <Heart className="h-6 w-6 text-primary" />
            <span className="ml-2 text-xl font-bold">ClinSync</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>

        <div className="p-4 gap-4 flex flex-col items-center ">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Mulher sorrindo"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className='items-center flex flex-col'>
            <p className="text-sm font-medium">Dr. Rebecca Chen</p>
            <p className="text-xs text-muted-foreground">Administrator</p>
          </div>
        </div>  
        
        <ScrollArea className="flex-1 py-4 border-t">
          <nav className="px-2 space-y-1">
            {sidebarLinks.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              if (item.children) {
                const isSubOpen = openMenus[item.name];
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleMenu(item.name)}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-sm font-medium transition-colors",
                        isSubOpen
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <Icon className="h-7 w-7 bg-primary-foreground rounded-md p-1.5
                      " />
                        <span className="flex-1 text-left">{item.name}</span>
                    </button>
                    {isSubOpen && (
                    <div className="ml-6 space-y-1">
                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block rounded-md px-3 py-2 text-sm transition-colors",
                              isChildActive
                                ? "bg-accent text-accent-foreground"
                                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                    )}
                  </div>
                );
              }

              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary-foreground text-muted-foreground"
                      : "text-muted-foreground hover:bg-primary-foreground hover:text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="mr-3 h-7 w-7 bg-primary-foreground rounded-md p-1.5 " />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </ScrollArea>
        <div className="border-t p-4 ">
          <div className="flex items-center bg-primary p-3 gap-2 rounded-md mt-auto">
            <div className="h-10 w-10 flex items-center justify-center">
              <PhoneCall className='w-7 h-7 text-white'>Tell</PhoneCall>
            </div>
            <div>
              <p className="text-medium font-bold  text-white">+351 912 345 678</p>
              <p className="text-medium text-muted-foreground text-white">Call us</p>
            </div>
          </div>
        </div>
      </aside>
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <div className="lg:pl-64 pt-16 lg:pt-0">
        {/* This div pushes content to the right of the sidebar */}
      </div>
    </>
  );
}