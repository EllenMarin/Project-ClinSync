import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, FileEdit, Trash2, ClipboardList } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

// Sample patient data
const patients = [
  {
    id: 1,
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    phone: "(+351) 123-4567",
    dob: "12/05/1985",
    status: "Active",
    lastVisit: "24/05/2023",
    upcomingAppointment: "12/07/2023"
  },
  {
    id: 2,
    name: "James Rodriguez",
    email: "james.rod@example.com",
    phone: "(+351) 234-5678",
    dob: "03/18/1979",
    status: "Active",
    lastVisit: "10/06/2023",
    upcomingAppointment: null
  },
  {
    id: 3,
    name: "Sophia Chen",
    email: "sophia.chen@example.com",
    phone: "(+351) 345-6789",
    dob: "09/25/1992",
    status: "Active",
    lastVisit: "15/06/2023",
    upcomingAppointment: "27/06/2023"
  },
  {
    id: 4,
    name: "Michael Johnson",
    email: "michael.j@example.com",
    phone: "(+351) 456-7890",
    dob: "07/12/1968",
    status: "Inactive",
    lastVisit: "05/01/2023",
    upcomingAppointment: null
  },
  {
    id: 5,
    name: "Olivia Brown",
    email: "olivia.brown@example.com",
    phone: "(+351) 567-8901",
    dob: "11/30/1990",
    status: "Active",
    lastVisit: "20/06/2023",
    upcomingAppointment: "08/07/2023"
  }
];

export function PatientsList() {
  return (
    
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Patient Visits</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="bg-muted/50">
              <tr className="border-b transition-colors">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-8">#</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Patient</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground hidden md:table-cell">Contact</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground hidden lg:table-cell">DOB</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground hidden md:table-cell">Last Visit</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground hidden lg:table-cell">Next Appointment</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-10">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr 
                  key={patient.id} 
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-4 align-middle">{patient.id}</td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage alt={patient.name} />
                        <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{patient.name}</div>
                        <div className="hidden text-xs text-muted-foreground sm:inline-block">
                          {patient.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle hidden md:table-cell">{patient.phone}</td>
                  <td className="p-4 align-middle hidden lg:table-cell">{patient.dob}</td>
                  <td className="p-4 align-middle">
                    <Badge variant={patient.status === "Active" ? "default" : "outline"}>
                      {patient.status}
                    </Badge>
                  </td>
                  <td className="p-4 align-middle hidden md:table-cell">{patient.lastVisit}</td>
                  <td className="p-4 align-middle hidden lg:table-cell">
                    {patient.upcomingAppointment || "—"}
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
     </CardContent>
    </Card>
    
    
  );
}