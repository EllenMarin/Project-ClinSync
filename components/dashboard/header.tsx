"use client"

import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-background px-4 md:px-6">
      <div className="hidden md:block flex-1">
        <div className="relative max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-md pl-8"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 md:ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                3
              </span>
              <span className="sr-only">Notifications</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className="flex items-center justify-between border-b px-4 py-2">
              <span className="font-medium">Notifications</span>
              <Button variant="ghost" size="sm" className="h-auto text-xs px-2">
                Mark all as read
              </Button>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {[1, 2, 3].map((id) => (
                <DropdownMenuItem key={id} className="p-0">
                  <button className="flex w-full cursor-default items-start gap-3 rounded-none border-b p-4 text-left">
                    <div className="h-8 w-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bell className="h-4 w-4 text-primary" />
                    </div>
                    <div className="grid gap-1">
                      <div className="text-sm font-medium">
                        New appointment request
                      </div>
                      <div className="line-clamp-1 text-xs text-muted-foreground">
                        Patient John Doe requested an appointment for tomorrow at 10:00 AM
                      </div>
                      <div className="text-xs text-muted-foreground">
                        10 minutes ago
                      </div>
                    </div>
                  </button>
                </DropdownMenuItem>
              ))}
            </div>
            <div className="border-t p-2">
              <Button variant="outline" size="sm" className="w-full">
                View all notifications
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <ThemeToggle />
      </div>
    </header>
  );
}