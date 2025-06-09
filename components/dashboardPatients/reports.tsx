import { Download, FileText } from "lucide-react"

const reports = [
    {
      id: 1,
      title: 'Reports 1 clinical documentation',
      date: 'May-28, 2024',
      type: 'Clinical'
    },
    {
      id: 2,
      title: 'Reports 2 random files documentation',
      date: 'Mar-20, 2024',
      type: 'Files'
    },
    {
      id: 3,
      title: 'Reports 3 glucose level complete report',
      date: 'Feb-18, 2024',
      type: 'Lab'
    }
  ];

const Reports = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Reports</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-teal-600 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium">#</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">File</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Reports Link</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Date</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {reports.map((report, index) => (
                    <tr key={report.id}>
                      <td className="px-4 py-3 text-sm text-gray-900">{report.id}</td>
                      <td className="px-4 py-3">
                        <div className="w-6 h-6 bg-teal-100 rounded flex items-center justify-center">
                          <FileText className="w-4 h-4 text-teal-600" />
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <a href="#" className="text-teal-600 hover:text-teal-800 text-sm">
                          {report.title}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{report.date}</td>
                      <td className="px-4 py-3">
                        <button className="bg-teal-600 text-white px-2 py-1 rounded text-xs hover:bg-teal-700">
                          <Download className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
    )
}
export default Reports;