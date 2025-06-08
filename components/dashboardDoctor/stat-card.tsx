import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  color = 'bg-blue-100 text-blue-600',
}) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h4 className="mt-2 text-2xl font-semibold text-gray-900">{value}</h4>
            
            {change && (
              <div className="mt-2 flex items-center">
                {change.type === 'increase' ? (
                  <ArrowUp size={16} className="text-green-500" />
                ) : (
                  <ArrowDown size={16} className="text-red-500" />
                )}
                <span 
                  className={`text-sm font-medium ${
                    change.type === 'increase' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {change.value}%
                </span>
                <span className="ml-1 text-sm text-gray-500">from last month</span>
              </div>
            )}
          </div>
          
          <div className={`p-3 rounded-full ${color}`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;