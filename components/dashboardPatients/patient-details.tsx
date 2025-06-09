import { useUser } from "@clerk/nextjs";
import { Calendar, Droplets, User } from "lucide-react";

 // Mock data for the patient
 const patientData = {
    name: 'Juana',
    gender: 'Female',
    age: 24,
    bloodType: 'O+',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    consultingDoctor: 'Dr. Elina',
    recentVisit: '20/08/2024',
    upcomingVisit: '08/09/2024'
  };


const PatientDetails = () => {

  const { user, isLoaded } = useUser();

  if (!isLoaded) return <div> Loading...</div>;

  if(!user) return null;

    return(
      <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-teal-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Name</p>
                <p className="text-lg font-semibold text-gray-900">{user.fullName}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-teal-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Gender</p>
                <p className="text-lg font-semibold text-gray-900">{patientData.gender}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-teal-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Age</p>
                <p className="text-lg font-semibold text-gray-900">{patientData.age}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Droplets className="w-6 h-6 text-teal-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Blood Type</p>
                <p className="text-lg font-semibold text-gray-900">{patientData.bloodType}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <User className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">Consulting Doctor: {patientData.consultingDoctor}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">Recent Visit: {patientData.recentVisit}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">Upcoming Visit: {patientData.upcomingVisit}</span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src={patientData.avatar} alt={patientData.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </>  
    )
}
export default PatientDetails;