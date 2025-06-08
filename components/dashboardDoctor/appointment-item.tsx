import React from 'react';
import { Clock, MapPin, MoreVertical } from 'lucide-react';
import { Avatar } from '../ui/avatar';
import { AppointmentType } from '@/types/types';
import { Badge } from '../ui/badge';

interface AppointmentItemProps {
  appointment: AppointmentType;
  onClick?: () => void;
}

const AppointmentItem: React.FC<AppointmentItemProps> = ({ appointment, onClick }) => {
  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { variant: any; label: string }> = {
      scheduled: { variant: 'info', label: 'Scheduled' },
      confirmed: { variant: 'success', label: 'Confirmed' },
      cancelled: { variant: 'danger', label: 'Cancelled' },
      completed: { variant: 'secondary', label: 'Completed' },
      'no-show': { variant: 'warning', label: 'No Show' },
    };

    const { variant, label } = statusMap[status] || { variant: 'secondary', label: status };
    return <Badge variant={variant}>{label}</Badge>;
  };

  return (
    <div
      className="flex items-start p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
      onClick={onClick}
    >
      {/*<Avatar
        src={appointment.patient.avatar}
        alt={appointment.patient.name}
        size="md"
        className="flex-shrink-0"
  />*/}
      <div className="ml-4 flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium text-gray-900">{appointment.patient.name}</h4>
          {getStatusBadge(appointment.status)}
        </div>
        <p className="text-sm text-gray-500">{appointment.reason}</p>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Clock size={14} className="mr-1" />
          <span className="mr-3">{appointment.time}</span>
          <MapPin size={14} className="mr-1" />
          <span>{appointment.location}</span>
        </div>
      </div>
      <button className="p-1 rounded-full hover:bg-gray-200">
        <MoreVertical size={16} className="text-gray-500" />
      </button>
    </div>
  );
};

export default AppointmentItem;