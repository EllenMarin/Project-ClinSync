import CardHelloDoctor from "@/components/dashboardDoctor/card-hello-doctor";
import DoctorList from "@/components/dashboardDoctor/doctorList";
import PatientTrends from "@/components/dashboardDoctor/patient-trends";
import prisma from "@/lib/prisma";
import { checkRole, getRole } from "@/utils/roles";
import { redirect } from "next/navigation";

const DoctorPage = async()=> {
    const isDoctor = await checkRole("DOCTOR");
    const role = await getRole();

    if(!isDoctor){
      redirect(`/${role}`);
    }

    const patientData = [
      { name: 'Sun', value: 20 },
      { name: 'Mon', value: 25 },
      { name: 'Tue', value: 22 },
      { name: 'Wed', value: 28 },
      { name: 'Thu', value: 24 },
      { name: 'Fri', value: 30 },
      { name: 'Sat', value: 26 },
    ];

    const doctors = await prisma.user.findMany({
      where: {role:'DOCTOR'},
      include: {
        doctorProfile:{
          include:{
            appointments:{
              where:{
                date: {
                  gte: new Date(),
                },
                status: 'SCHEDULED'
              },
              select:{
              id:true,
              status: true,
              date: true
              }
            }
          }
        } 
      }
    });

  return (
    <>
    <CardHelloDoctor/>
    {/*<PatientTrends data={patientData}/>*/}
    <DoctorList doctors={doctors}/>
    </>
  );
}
export default DoctorPage;