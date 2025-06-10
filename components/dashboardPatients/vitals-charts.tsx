"use client";
import { Activity, Droplets, Heart, Thermometer } from "lucide-react";

const vitalsData = [
    {
      title: 'BP Levels',
      icon: <Activity className="w-6 h-6 text-teal-600" />,
      values: [
        { date: '24/04/2024', value: 140 },
        { date: '16/04/2024', value: 190 },
        { date: '10/04/2024', value: 230 }
      ]
    },
    {
      title: 'Sugar Levels',
      icon: <Droplets className="w-6 h-6 text-teal-600" />,
      values: [
        { date: '24/04/2024', value: 140 },
        { date: '16/04/2024', value: 190 },
        { date: '10/04/2024', value: 230 }
      ]
    },
    {
      title: 'Heart Rate',
      icon: <Heart className="w-6 h-6 text-teal-600" />,
      values: [
        { date: '24/04/2024', value: 110 },
        { date: '16/04/2024', value: 120 },
        { date: '10/04/2024', value: 100 }
      ]
    },
    {
      title: 'Cholesterol',
      icon: <Thermometer className="w-6 h-6 text-teal-600" />,
      values: [
        { date: '24/04/2024', value: 180 },
        { date: '16/04/2024', value: 200 },
        { date: '10/04/2024', value: 290 }
      ]
    }
  ];

const VitalsCharts = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {vitalsData.map((vital, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                {vital.icon}
                <h3 className="font-medium text-gray-900">{vital.title}</h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">Recent five visits</p>
              
              {/* Simple line chart representation */}
              <div className="h-20 flex items-end space-x-1 mb-4">
                {vital.values.map((_, i) => (
                  <div key={i} className="flex-1 bg-teal-200 rounded-t" style={{height: `${Math.random() * 60 + 20}px`}}></div>
                ))}
              </div>
              
              <div className="space-y-1 text-xs text-gray-600">
                {vital.values.map((value, i) => (
                  <div key={i} className="flex justify-between">
                    <span>{value.date}</span>
                    <span>{value.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    )
}
export default VitalsCharts;