import { Pill } from "lucide-react";

const Pharmacy = () => {
    return(
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Pharmacy</h3>
            <div className="text-center">
              <div className="mb-4">
                <Pill className="w-16 h-16 text-teal-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">980€</div>
                <div className="text-sm text-gray-500">Average Spending</div>
                <div className="text-sm text-gray-500">+20% vs last month</div>
              </div>
            </div>
          </div>
    )
}
export default Pharmacy;