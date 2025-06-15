
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
    time: '9:00 AM',
    duration: '30 min',
    patient: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    type: 'Consultation',
    status: 'confirmed',
    phone: '(+351) 123-4567',
    email: 'sarah.j@email.com',
    date: 'June 26, 2023',
    doctor: 'Dr.S'
  },
  {
    id: 2,
    time: '10:30 AM',
    duration: '45 min',
    patient: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    type: 'Follow-up',
    status: 'confirmed',
    phone: '(+351) 234-5678',
    email: 'michael.c@email.com',
    date: 'June 26, 2023',
    doctor: 'Dr. Smith'
  },
  {
    id: 3,
    time: '2:00 PM',
    duration: '60 min',
    patient: 'Emily Rodriguez',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    type: 'Surgery Consultation',
    status: 'pending',
    phone: '(+351) 345-6789',
    email: 'emily.r@email.com',
    date: 'June 26, 2023',
    doctor: 'Dr. Sarah'
  },
  {
    id: 4,
    time: '3:30 PM',
    duration: '30 min',
    patient: 'David Wilson',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    type: 'Check-up',
    status: 'confirmed',
    phone: '(+351) 456-7890',
    email: 'david.w@email.com',
    date: 'June 26, 2023',
    doctor: 'Dr.Smith'
  },
  {
    id: 5,
    time: '4:30 PM',
    duration: '30 min',
    patient: 'Lisa Thompson',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    type: 'Vaccination',
    status: 'confirmed',
    phone: '(+351) 567-8901',
    email: 'lisa.t@email.com',
    date: 'June 26, 2023',
    doctor: 'Dr.Sussan'
  }
]

export function AppointmentsList() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Today&apos;s Appointments</h3>
        <p className="text-sm text-gray-500">June 26, 2023 - {appointments.length} appointments scheduled</p>
      </div>
      
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="bg-gray-50">
            <tr className="border-b border-gray-200 transition-colors">
              <th className="h-12 px-6 text-left align-middle font-medium text-gray-600">Patient</th>
              <th className="h-12 px-6 text-left align-middle font-medium text-gray-600">Date & Time</th>
              <th className="h-12 px-6 text-left align-middle font-medium text-gray-600 hidden md:table-cell">Type</th>
              <th className="h-12 px-6 text-left align-middle font-medium text-gray-600 hidden lg:table-cell">Doctor</th>
              <th className="h-12 px-6 text-left align-middle font-medium text-gray-600">Status</th>
              <th className="h-12 px-6 text-left align-middle font-medium text-gray-600 w-10">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr 
                key={appointment.id} 
                className="border-b border-gray-100 transition-colors hover:bg-gray-50"
              >
                <td className="p-6 align-middle">
                  <div className="flex items-center gap-3">
                    
                    <img 
                        src={appointment.avatar} 
                        alt={appointment.patient}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    <div className="font-medium text-gray-900">{appointment.patient}</div>
                  </div>
                </td>
                <td className="p-6 align-middle">
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900">{appointment.date}</span>
                    <span className="text-xs text-gray-500">{appointment.time}</span>
                  </div>
                </td>
                <td className="p-6 align-middle hidden md:table-cell text-gray-700">{appointment.type}</td>
                <td className="p-6 align-middle hidden lg:table-cell text-gray-700">{appointment.doctor}</td>
                <td className="p-6 align-middle">
                  <Badge
                    variant={
                      appointment.status === "Confirmed"
                        ? "default" 
                        : appointment.status === "Pending"
                        ? "outline"
                        : "destructive"
                    }
                    className={
                      appointment.status === "Confirmed"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : appointment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800 border-yellow-300"
                        : "bg-red-100 text-red-800 hover:bg-red-100"
                    }
                  >
                    {appointment.status}
                  </Badge>
                </td>
                <td className="p-6 align-middle">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-lg">
                      <DropdownMenuItem className="cursor-pointer text-gray-700 hover:bg-gray-50">
                        <ClipboardList className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-gray-700 hover:bg-gray-50">
                        <FileEdit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-gray-700 hover:bg-gray-50">
                        <Calendar className="mr-2 h-4 w-4" />
                        Reschedule
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-gray-700 hover:bg-gray-50">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Confirm
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-gray-700 hover:bg-gray-50">
                        <XCircle className="mr-2 h-4 w-4" />
                        Cancel
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-red-600 hover:bg-red-50">
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