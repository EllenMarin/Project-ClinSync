import { Activity } from "lucide-react"

const HealthActivity = () => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Activity</h3>
            <div className="relative h-48">
              {/* Radar chart placeholder */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 border-2 border-teal-200 rounded-full"></div>
                  <div className="absolute inset-4 border-2 border-teal-300 rounded-full"></div>
                  <div className="absolute inset-8 border-2 border-teal-400 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Activity className="w-8 h-8 text-teal-600" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 text-center">
                <div className="grid grid-cols-4 gap-2 text-xs text-gray-500">
                  <div>Sleeping</div>
                  <div>Walking</div>
                  <div>Running</div>
                  <div>Cycling</div>
                </div>
              </div>
            </div>
          </div>
    )
}
export default HealthActivity;