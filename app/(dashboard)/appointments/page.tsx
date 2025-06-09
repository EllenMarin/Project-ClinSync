"use client";
import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Plus,
  Clock,
  User,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const AppointmentsPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 4, 1)); // May 2024
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');

  // Mock appointments data
  const appointmentsData = {
  
    '2024-05-16': 5,
    '2024-05-17': 9,
    '2024-05-18': 12,
    '2024-05-19': 9,
    '2024-05-20': 7,
    '2024-05-21': 16,
    '2024-05-22': 9,
    '2024-05-23': 13,
    '2024-05-24': 20,
    '2024-05-25': 11,
    '2024-05-26': 3,
    '2024-05-27': 6,
    '2024-05-28': 18,
    '2024-05-29': 4,
    '2024-05-30': 5,
    '2024-05-31': 8,
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      const prevMonthDay = new Date(year, month, -startingDayOfWeek + i + 1);
      days.push({
        date: prevMonthDay.getDate(),
        isCurrentMonth: false,
        fullDate: prevMonthDay,
        appointments: 0
      });
    }

    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const fullDate = new Date(year, month, day);
      const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}` as keyof typeof appointmentsData;
      days.push({
        date: day,
        isCurrentMonth: true,
        fullDate,
        appointments: appointmentsData[dateKey] || 0
      });
    }

    // Add days from next month to complete the grid
    const remainingCells = 42 - days.length; // 6 rows × 7 days = 42 cells
    for (let day = 1; day <= remainingCells; day++) {
      const nextMonthDay = new Date(year, month + 1, day);
      days.push({
        date: day,
        isCurrentMonth: false,
        fullDate: nextMonthDay,
        appointments: 0
      });
    }

    return days;
  };
  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <span>Appointments</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">05/11/2025 - 06/09/2025</span>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Calendar Controls */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={() => navigateMonth('next')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={goToToday}
                  className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
                >
                  today
                </button>
                <h2 className="text-xl font-semibold text-gray-900">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('month')}
                  className={`px-3 py-1 text-sm rounded transition-colors ${
                    viewMode === 'month' 
                      ? 'bg-teal-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  month
                </button>
                <button
                  onClick={() => setViewMode('week')}
                  className={`px-3 py-1 text-sm rounded transition-colors ${
                    viewMode === 'week' 
                      ? 'bg-teal-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  week
                </button>
                <button
                  onClick={() => setViewMode('day')}
                  className={`px-3 py-1 text-sm rounded transition-colors ${
                    viewMode === 'day' 
                      ? 'bg-teal-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  day
                </button>
              </div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-6">
            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-px mb-2">
              {dayNames.map(day => (
                <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
              {days.map((day, index) => (
                <div
                  key={index}
                  className={`bg-white p-3 min-h-[120px] relative cursor-pointer hover:bg-gray-50 transition-colors ${
                    !day.isCurrentMonth ? 'text-gray-400 bg-gray-50' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-sm font-medium ${
                      day.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {day.date}
                    </span>
                  </div>
                  
                  {day.appointments > 0 && day.isCurrentMonth && (
                    <div className="space-y-1">
                      <div className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs font-medium">
                        {day.appointments} Appointments
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AppointmentsPage;