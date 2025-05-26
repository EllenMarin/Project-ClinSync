import { Stethoscope } from "lucide-react";

const CardHelloDoctor = () => { 
    return(
      
      
      <div className="bg-teal-600 rounded-lg p-6 text-white mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Good Morning,</h2>
            <h1 className="text-3xl font-bold">Dr. Ema Wilson</h1>
            <p className="text-teal-100 mb-6">Your schedule today</p>
          
            <div className="flex flex-row gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-green-500 rounded-full p-6 inline-flex items-center justify-center">
                  <Stethoscope className=" text-white w-6 h-6"/>
                </div>
                <div>
                  <div className="text-4xl font-bold">86</div>
                  <div className="text-teal-100">Appointments</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-green-500 rounded-full p-6 inline-flex items-center justify-center">
                  <Stethoscope className=" text-white w-6 h-6"/>
                </div>
                <div>
                  <div className="text-4xl font-bold">23</div>
                  <div className="text-teal-100">Surgies</div>
                </div>
              </div>
            </div>

            </div>  
        </div>
      


    </div>
    )
}
export default CardHelloDoctor;