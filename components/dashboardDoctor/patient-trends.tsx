import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface PatientData{
  name: string;
  value: number;
}

interface PatientTrendsProps{
  data: PatientData[];
}

const PatientTrends = ({data}: PatientTrendsProps) => {
    return (
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Patients</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#2DD4BF" 
                strokeWidth={2} 
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
};
export default PatientTrends;