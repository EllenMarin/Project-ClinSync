import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const appointments = [
  {
    id: 1,
    patient: "Emma Wilson",
    date: "Today, 11:30 AM",
    type: "Check-up",
    status: "Confirmed",
  },
  {
    id: 2,
    patient: "James Rodriguez",
    date: "Today, 2:00 PM",
    type: "Follow-up",
    status: "Confirmed",
  },
  {
    id: 3,
    patient: "Sophia Chen",
    date: "Today, 3:15 PM",
    type: "Consultation",
    status: "Pending",
  },
  {
    id: 4,
    patient: "Michael Johnson",
    date: "Tomorrow, 10:00 AM",
    type: "Surgery",
    status: "Confirmed",
  },
  {
    id: 5,
    patient: "Olivia Brown",
    date: "Tomorrow, 1:30 PM",
    type: "Check-up",
    status: "Cancelled",
  },
];

export function AppointmentsTable() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Upcoming Appointments</CardTitle>
        <Button variant="ghost" size="sm" className="gap-1">
          View all
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div 
              key={appointment.id} 
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div className="grid gap-1">
                <p className="font-medium">{appointment.patient}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{appointment.date}</span>
                  <span>•</span>
                  <span>{appointment.type}</span>
                </div>
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
      </CardContent>
    </Card>
  );
}