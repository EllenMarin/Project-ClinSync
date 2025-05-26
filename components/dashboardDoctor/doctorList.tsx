import { Badge } from "@/components/ui/badge";
import { Avatar } from "../ui/avatar";

interface Doctor{
    id:string;
    name: string;
    doctorProfile:{
        specialty:string;
        licenseNumber:string;
        appointments?: {
            id:string;
            status:string;
            date: Date;
        }[];
    }| null;
    
}

interface DoctorListProps{
    doctors: Doctor[];
}

const DoctorList = ({doctors}: DoctorListProps) => {
    const isDoctorAvailable = (doctor: Doctor) => {
        const today = new Date();
        const hasScheduledAppointments = doctor.doctorProfile?.appointments?.some(
            apt => apt.status === 'SCHEDULED' && new Date(apt.date) >= today
        );
        return !hasScheduledAppointments;
    };

    return(
        <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Doctors</h3>
                <div className="space-y-4">
                    {doctors.map((doctor) => {
                        const isAvailable = isDoctorAvailable(doctor);
                        
                        return (
                            <div key={doctor.id} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full" >
                                        <Avatar name={doctor.name} size="md" />
                                    </div>
                                    <div>
                                        <div className="font-medium">{doctor.name}</div>
                                        <div className="text-sm text-gray-500">{doctor.doctorProfile?.specialty}</div>
                                    </div>
                                </div>

                                <Badge 
                                    variant={isAvailable ? "default" : "destructive"}
                                    className={isAvailable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                                >
                                    
                                    {isAvailable ? (
                                        <span className="flex items-center">
                                        <span className="h-2.5 w-2.5 rounded-full bg-green-600 mr-1"></span>
                                        Available
                                        </span>)
                                        :(
                                        <span className="flex items-center">
                                        <span className="h-2.5 w-2.5 rounded-full bg-red-600 mr-1"></span>
                                        Not Available
                                        </span>
                                        )
                                    }
                                </Badge>
                            </div>
                        );


                    })}                </div>            </div>        </div>
    );
};
export default DoctorList;