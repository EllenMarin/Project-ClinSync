
const medications = [
    { name: 'Aricep Tablet', morning: 1, afternoon: 1, night: 1 },
    { name: 'Cresemba Capsule', morning: 0, afternoon: 1, night: 1 },
    { name: 'Justoza Tablet', morning: 1, afternoon: 1, night: 0 }
  ];

  const PrescriptionReports = () => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prescription</h3>
          <p className="text-sm text-gray-600 mb-4">
          I prescribe Amoxicillin 500 mg, orally, every 8 hours for 7 days, for the treatment of respiratory tract infection. Maintain adequate hydration and relative rest during this period. In case of persistent fever or adverse reactions, return immediately to medical care. Avoid self-medication and follow the dosing schedule strictly.
          </p>
          
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-2">Reports</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div>Weight: 48lbs</div>
              <div>Blood Pressure: 120</div>
              <div>Sugar Levels Before: 90</div>
              <div></div>
              <div></div>
              <div>Sugar Levels After: 180</div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Medicines</h4>
            <p className="text-sm text-gray-600 mb-4">For 10 Days</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {medications.map((med, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-2">{med.name}</h5>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>Morning: {med.morning} | Afternoon: {med.afternoon} | Night: {med.night}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    )
}
export default PrescriptionReports;