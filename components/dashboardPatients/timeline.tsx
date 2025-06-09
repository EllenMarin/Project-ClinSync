const timelineEvents = [
    {
      time: 'AN HOUR AGO',
      doctor: 'Dr. Juana Mcdonald',
      action: 'sent a new prescription',
      medication: 'Medicine Name - Amoxicillin'
    },
    {
      time: 'AN HOUR AGO',
      doctor: 'Dr. Hector Banks',
      action: 'uploaded a report',
      report: 'Report Name - Lisinopril'
    },
    {
      time: 'AN HOUR AGO',
      doctor: 'Dr. Deana Cooley',
      action: 'sent medicine details'
    }
  ];
  
  const Timeline = () => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Timeline</h3>
            <div className="space-y-4">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">{event.time}</p>
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{event.doctor}</span> - {event.action}
                    </p>
                    {event.medication && (
                      <p className="text-sm text-gray-600">{event.medication}</p>
                    )}
                    {event.report && (
                      <p className="text-sm text-gray-600">{event.report}</p>
                    )}
                    <a href="#" className="text-xs text-teal-600 hover:text-teal-800">Payment Link →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
    )
}
export default Timeline;