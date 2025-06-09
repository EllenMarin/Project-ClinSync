import { Download } from "lucide-react"

  const doctorVisits = [
    {
      doctor: 'Dr. Hector',
      date: '20/05/2024',
      department: 'Dentist',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      doctor: 'Dr. Michel',
      date: '20/05/2024',
      department: 'Urologist',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
      doctor: 'Dr. Fermin',
      date: '19/03/2024',
      department: 'Surgeon',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
    }
  ];


const DoctorVisits = ()=> {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Doctor Visits</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-teal-600 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium">Doctor</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Date</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Department</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Reports</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {doctorVisits.map((visit, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <img src={visit.avatar} alt={visit.doctor} className="w-6 h-6 rounded-full mr-2" />
                          <span className="text-sm text-gray-900">{visit.doctor}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{visit.date}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{visit.department}</td>
                      <td className="px-4 py-3">
                        <div className="flex space-x-1">
                          <button className="bg-teal-600 text-white px-2 py-1 rounded text-xs hover:bg-teal-700">
                            View Reports
                          </button>
                          <button className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs hover:bg-gray-200">
                            <Download className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

    )
}
export default DoctorVisits;