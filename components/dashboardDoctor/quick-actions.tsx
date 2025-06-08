import React from 'react';
import { 
  Calendar, 
  FileText, 
  MessageSquare, 
  Activity, 
  Pill, 
  Clipboard,
  Share2,
  Bell
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/card';

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick?: () => void;
}

const QuickAction: React.FC<QuickActionProps> = ({ icon, label, color, onClick }) => {
  return (
    <div 
      className="flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-50"
      onClick={onClick}
    >
      <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center mb-2`}>
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-700 text-center">{label}</span>
    </div>
  );
};

interface QuickActionsProps {
  onActionClick?: (action: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onActionClick }) => {
  const actions = [
    {
      icon: <Calendar size={20} className="text-blue-600" />,
      label: 'Schedule',
      color: 'bg-blue-100',
      action: 'schedule'
    },
    {
      icon: <FileText size={20} className="text-purple-600" />,
      label: 'Records',
      color: 'bg-purple-100',
      action: 'records'
    },
    {
      icon: <MessageSquare size={20} className="text-green-600" />,
      label: 'Messages',
      color: 'bg-green-100',
      action: 'messages'
    },
    {
      icon: <Activity size={20} className="text-red-600" />,
      label: 'Vitals',
      color: 'bg-red-100',
      action: 'vitals'
    },
    {
      icon: <Pill size={20} className="text-yellow-600" />,
      label: 'Prescribe',
      color: 'bg-yellow-100',
      action: 'prescribe'
    },
    {
      icon: <Clipboard size={20} className="text-indigo-600" />,
      label: 'Lab Tests',
      color: 'bg-indigo-100',
      action: 'lab-tests'
    },
    {
      icon: <Share2 size={20} className="text-teal-600" />,
      label: 'Refer',
      color: 'bg-teal-100',
      action: 'refer'
    },
    {
      icon: <Bell size={20} className="text-orange-600" />,
      label: 'Reminders',
      color: 'bg-orange-100',
      action: 'reminders'
    }
  ];

  const handleActionClick = (action: string) => {
    if (onActionClick) {
      onActionClick(action);
    }
  };

  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-2">
          {actions.map((action) => (
            <QuickAction
              key={action.action}
              icon={action.icon}
              label={action.label}
              color={action.color}
              onClick={() => handleActionClick(action.action)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;