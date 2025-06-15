"use client"

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Appointment = {
  id: number;
  patient: string;
  time: string;
  type: string;
  status: string;
};
const appointmentsByDay:  Record<string, Appointment[]> = {
  '2023-06-26': [
    { id: 1, patient: "Emma Wilson", time: "11:30 AM", type: "Check-up", status: "Confirmed" },
    { id: 2, patient: "James Rodriguez", time: "2:00 PM", type: "Follow-up", status: "Confirmed" },
    { id: 3, patient: "Sophia Chen", time: "3:15 PM", type: "Consultation", status: "Pending" },
  ],
  '2023-06-27': [
    { id: 4, patient: "Michael Johnson", time: "10:00 AM", type: "Pre-Surgery", status: "Confirmed" },
    { id: 5, patient: "Olivia Brown", time: "1:30 PM", type: "Check-up", status: "Cancelled" },
  ],
  '2023-06-28': [
    { id: 6, patient: "William Davis", time: "9:00 AM", type: "Check-up", status: "Confirmed" },
    { id: 7, patient: "Ava Miller", time: "11:45 AM", type: "Follow-up", status: "Confirmed" },
    { id: 8, patient: "Noah Wilson", time: "2:30 PM", type: "Consultation", status: "Pending" },
  ],
};

// Helper function to get today's date in YYYY-MM-DD format
const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

export function AppointmentsCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  // Format the selected date to match our data keys (YYYY-MM-DD)
  const formattedDate = selectedDate 
    ? selectedDate.toISOString().split('T')[0]
    : getTodayDate();
    
  // Get appointments for the selected date
  const selectedDateAppointments = appointmentsByDay[formattedDate] || [];

  return (
    <div className="grid gap-6 md:grid-cols-[350px_1fr]">
      <Card>
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
          <CardDescription>
            Select a date to view appointments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
            // Highlight days with appointments
            modifiers={{
              booked: Object.keys(appointmentsByDay).map(date => new Date(date)),
            }}
            modifiersStyles={{
              booked: { fontWeight: 'bold', backgroundColor: 'hsl(var(--primary) / 0.1)' }
            }}
          />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>
            {selectedDate ? (
              <>{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</>
            ) : (
              'No date selected'
            )}
          </CardTitle>
          <CardDescription>
            {selectedDateAppointments.length 
              ? `${selectedDateAppointments.length} appointments scheduled`
              : 'No appointments scheduled'
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {selectedDateAppointments.length > 0 ? (
            <div className="space-y-4">
              {selectedDateAppointments.map((appointment) => (
                <div 
                  key={appointment.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="grid gap-1">
                    <div className="font-medium">{appointment.patient}</div>
                    <div className="text-sm text-muted-foreground">{appointment.time} - {appointment.type}</div>
                  </div>
                  <Badge
                    variant={
                      appointment.status === "Confirmed"
                        ? "default" 
                        : appointment.status === "Pending"
                        ? "outline"
                        : "destructive"
                    }
                  >
                    {appointment.status}
                  </Badge>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
              <p className="text-sm text-muted-foreground">No appointments for this date.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}