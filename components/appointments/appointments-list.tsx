import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, FileEdit, Trash2, ClipboardList, Calendar, CheckCircle2, XCircle } from 'lucide-react';

// Sample appointment data
const appointments = [
  {
    id: 1,
    patient: {
      name: "Emma Wilson",
      image: null,
    },
    date: "26/06/2023",
    time: "11:30 AM",
    type: "Check-up",
    doctor: "Dr. Robert Smith",
    status: "Confirmed",
    notes: "Regular check-up, review medication"
  },
  {
    id: 2,
    patient: {
      name: "James Rodriguez",
      image: null,
    },
    date: "26/06/2023",
    time: "2:00 PM",
    type: "Follow-up",
    doctor: "Dr. Sarah Johnson",
    status: "Confirmed",
    notes: "Follow-up after surgery, remove stitches"
  },
  {
    id: 3,
    patient: {
      name: "Sophia Chen",
      image: null,
    },
    date: "26/06/2023",
    time: "3:15 PM",
    type: "Consultation",
    doctor: "Dr. Michael Lee",
    status: "Pending",
    notes: "New patient consultation, chronic pain issues"
  },
  {
    id: 4,
    patient: {
      name: "Michael Johnson",
      image: null,
    },
    date: "27/06/2023",
    time: "10:00 AM",
    type: "Pre-Surgery",
    doctor: "Dr. Emily Davis",
    status: "Confirmed",
    notes: "Pre-surgery consultation, review test results"
  },
  {
    id: 5,
    patient: {
      name: "Olivia Brown",
      image: null,
    },
    date: "27/06/2023",
    time: "1:30 PM",
    type: "Check-up",
    doctor: "Dr. Robert Smith",
    status: "Cancelled",
    notes: "Annual check-up, update vaccination"
  }
];

export function AppointmentsList() {
  return (
    <div className="rounded-md border">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="bg-muted/50">
            <tr className="border-b transition-colors">
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Patient</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date & Time</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground hidden md:table-cell">Type</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground hidden lg:table-cell">Doctor</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-10">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr 
                key={appointment.id} 
                className="border-b transition-colors hover:bg-muted/50"
              >
                <td className="p-4 align-middle">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage alt={appointment.patient.name} src={appointment.patient.image || undefined} />
                      <AvatarFallback>{appointment.patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="font-medium">{appointment.patient.name}</div>
                  </div>
                </td>
                <td className="p-4 align-middle">
                  <div className="flex flex-col">
                    <span className="font-medium">{appointment.date}</span>
                    <span className="text-xs text-muted-foreground">{appointment.time}</span>
                  </div>
                </td>
                <td className="p-4 align-middle hidden md:table-cell">{appointment.type}</td>
                <td className="p-4 align-middle hidden lg:table-cell">{appointment.doctor}</td>
                <td className="p-4 align-middle">
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
                </td>
                <td className="p-4 align-middle">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="cursor-pointer">
                        <ClipboardList className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <FileEdit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Calendar className="mr-2 h-4 w-4" />
                        Reschedule
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Confirm
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <XCircle className="mr-2 h-4 w-4" />
                        Cancel
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}