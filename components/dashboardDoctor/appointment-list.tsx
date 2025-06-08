"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Search } from 'lucide-react';
import { AppointmentType } from '@/types/types';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import AppointmentItem from './appointment-item';

interface AppointmentListProps {
  appointments: AppointmentType[];
  onViewAll?: () => void;
  onAddNew?: () => void;
}

const AppointmentList: React.FC<AppointmentListProps> = ({
  appointments,
  onViewAll,
  onAddNew,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  const goToPreviousDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const goToNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Appointments</h3>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={onViewAll}
            >
              View All
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              onClick={onAddNew}
            >
              New
            </Button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <button 
            className="p-1.5 rounded-full hover:bg-gray-100"
            onClick={goToPreviousDay}
          >
            <ChevronLeft size={18} className="text-gray-600" />
          </button>
          <h4 className="text-md font-medium">{formatDate(currentDate)}</h4>
          <button 
            className="p-1.5 rounded-full hover:bg-gray-100"
            onClick={goToNextDay}
          >
            <ChevronRight size={18} className="text-gray-600" />
          </button>
        </div>
        
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search appointments..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow overflow-auto p-0">
        <div className="divide-y divide-gray-100">
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <AppointmentItem
                key={appointment.id}
                appointment={appointment}
              />
            ))
          ) : (
            <div className="p-6 text-center text-gray-500">
              No appointments scheduled for today
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentList;