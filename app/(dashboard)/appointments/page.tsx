"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, CalendarDays, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AppointmentsCalendar } from '@/components/appointments/appointments-calendar';
import { AppointmentsList } from '@/components/appointments/appointments-list';
import { AddAppointmentDialog } from '@/components/appointments/add-appointment-dialog';

export default function AppointmentsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
        <Button onClick={() => setOpen(true)} className="w-full sm:w-auto">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Appointment
        </Button>
      </div>
      
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs defaultValue="list" className="w-full">
          <TabsList>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>
          <div className="mt-4">
            <TabsContent value="list" className="m-0">
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search appointments..."
                    className="w-full bg-background pl-8 md:max-w-sm"
                  />
                </div>
              </div>
              <AppointmentsList />
            </TabsContent>
            <TabsContent value="calendar" className="m-0">
              <AppointmentsCalendar />
            </TabsContent>
          </div>
        </Tabs>
      </div>
      
      <AddAppointmentDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}