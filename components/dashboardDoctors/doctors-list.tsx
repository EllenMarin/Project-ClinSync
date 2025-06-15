import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Doctor = {
  id: string;
  name: string;
  specialty: string;
  email: string;
  phone: string;
  status: "active" | "inactive" | "on leave";
};

// Mock data for doctors
const doctors: Doctor[] = [
  {
    id: "DR001",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    email: "sarah.johnson@example.com",
    phone: "(555) 123-4567",
    status: "active",
  },
  {
    id: "DR002",
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    email: "michael.chen@example.com",
    phone: "(555) 234-5678",
    status: "active",
  },
  {
    id: "DR003",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    email: "emily.rodriguez@example.com",
    phone: "(555) 345-6789",
    status: "on leave",
  },
  {
    id: "DR004",
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    email: "james.wilson@example.com",
    phone: "(555) 456-7890",
    status: "active",
  },
  {
    id: "DR005",
    name: "Dr. Lisa Thompson",
    specialty: "Dermatology",
    email: "lisa.thompson@example.com",
    phone: "(555) 567-8901",
    status: "inactive",
  },
];

export function DoctorsList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Specialty</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {doctors.map((doctor) => (
            <TableRow key={doctor.id}>
              <TableCell>{doctor.id}</TableCell>
              <TableCell>{doctor.name}</TableCell>
              <TableCell>{doctor.specialty}</TableCell>
              <TableCell>{doctor.email}</TableCell>
              <TableCell>{doctor.phone}</TableCell>
              <TableCell>
                <Badge
                  variant={doctor.status === "active" ? "default" : 
                          doctor.status === "on leave" ? "outline" : "secondary"}
                >
                  {doctor.status}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>View schedule</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
