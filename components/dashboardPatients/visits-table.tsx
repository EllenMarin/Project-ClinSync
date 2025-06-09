import { Download } from "lucide-react";

const VisitsTable = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Visits</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium">Consulting Doctor</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Visit Date</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Department</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Fee Paid</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Lab Reports</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dr. Hector" className="w-8 h-8 rounded-full mr-3" />
                      <span className="text-sm font-medium text-gray-900">Dr. Hector</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">20/05/2024</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Orthopaedics</td>
                  <td className="px-6 py-4 text-sm text-gray-600">200€</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="bg-teal-600 text-white px-3 py-1 rounded text-sm hover:bg-teal-700">
                        View Reports
                      </button>
                      <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-sm hover:bg-gray-200">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    )
}
export default VisitsTable;