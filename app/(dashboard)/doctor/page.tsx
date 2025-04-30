import { checkRole, getRole } from "@/utils/roles";
import { redirect } from "next/navigation";

const DoctorPage = async()=> {
    const isDoctor = await checkRole("DOCTOR");
    const role = await getRole();

    if(!isDoctor){
      redirect(`/${role}`);
    }

  return (
    <div>
      <h1>Doctor Page</h1>
    </div>
  );
}
export default DoctorPage;