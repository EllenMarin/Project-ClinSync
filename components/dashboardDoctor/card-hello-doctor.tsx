import { useUser } from "@clerk/nextjs";

const CardHelloDoctor = () => { 

  const {user} = useUser();
  if(!user) return null;

    return(
      <div className="bg-teal-600 rounded-lg p-6 text-white mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Good Morning,</h2>
            <h1 className="text-3xl font-bold">Dr. {user?.fullName || 'N/A'}</h1>
            <p className="text-teal-100 mb-6">Your schedule today</p>
          
          </div>  
        </div>
      </div>
    )
}
export default CardHelloDoctor;