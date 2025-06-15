import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Mail, Phone, UserRound } from "lucide-react";

type DoctorDetailsProps = {
  doctor: {
    id: string;
    name: string;
    specialty: string;
    email: string;
    phone: string;
    status: "active" | "inactive" | "on leave";
    avatar?: string;
    bio?: string;
    experience?: string;
    qualifications?: string;
    schedule?: {
      day: string;
      hours: string;
    }[];
  };
};

export function DoctorDetails({ doctor }: DoctorDetailsProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Avatar name={doctor.name} className="h-16 w-16">
                {doctor.avatar && <AvatarImage src={doctor.avatar} alt={doctor.name} />}
                <AvatarFallback>{getInitials(doctor.name)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{doctor.name}</CardTitle>
                <CardDescription className="flex items-center mt-1">
                  <UserRound className="h-4 w-4 mr-1" />
                  {doctor.specialty}
                </CardDescription>
              </div>
            </div>
            <Badge
              variant={doctor.status === "active" ? "default" : 
                     doctor.status === "on leave" ? "outline" : "secondary"}
              className="h-6"
            >
              {doctor.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{doctor.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{doctor.phone}</span>
                </div>
              </div>
            </div>

            {doctor.schedule && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Schedule</h3>
                <div className="space-y-2">
                  {doctor.schedule.map((slot, index) => (
                    <div key={index} className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{slot.day}: {slot.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {doctor.bio && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Biography</h3>
              <p className="text-sm">{doctor.bio}</p>
            </div>
          )}

          {doctor.qualifications && (
            <div className="mt-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Qualifications</h3>
              <p className="text-sm">{doctor.qualifications}</p>
            </div>
          )}

          <div className="flex justify-end gap-2 mt-6">
            <Button variant="outline" size="sm">Edit Details</Button>
            <Button size="sm">View Schedule</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
