import React from 'react';
import { Phone, Mail, Clock, Heart, AlertCircle } from 'lucide-react';
import { PatientType } from '@/types/types';
import { Card, CardContent } from '../ui/card';
import { Avatar } from '../ui/avatar';
import { Badge } from '../ui/badge';

interface PatientCardProps {
  patient: PatientType;
  onClick?: () => void;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient, onClick }) => {
  return (
    <Card 
      className="h-full cursor-pointer transition-all duration-200 hover:border-blue-300"
      //hoverable
    >
      <CardContent className="p-6" onClick={onClick}>
        <div className="flex items-start justify-between">
          {/*<Avatar 
            src={patient.avatar} 
            alt={patient.name} 
            size="lg" 
          />*/}
          <div>
            {patient.critical && (
              <Badge variant="destructive" size="sm" className="mb-2">
                <AlertCircle size={12} className="mr-1" />
                Critical
              </Badge>
            )}
            <div className="flex space-x-1 items-center">
              <Badge variant={patient.gender === 'Male' ? 'info' : 'secondary'} size="sm">
                {patient.gender}
              </Badge>
              <Badge variant="secondary" size="sm">
                {patient.age} yrs
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <h3 className="font-semibold text-lg text-gray-900">{patient.name}</h3>
          <p className="text-sm text-gray-500">ID: {patient.id}</p>
        </div>
        
        <div className="mt-3 space-y-2">
          <div className="flex items-center text-sm">
            <Phone size={14} className="text-gray-400 mr-2" />
            <span className="text-gray-600">{patient.phone}</span>
          </div>
          <div className="flex items-center text-sm">
            <Mail size={14} className="text-gray-400 mr-2" />
            <span className="text-gray-600 text-sm truncate">{patient.email}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Clock size={16} className="text-blue-500 mr-2" />
              <span className="text-sm font-medium">
                Last visit: {patient.lastVisit}
              </span>
            </div>
          </div>
          
          <div className="mt-3 flex items-center">
            <Heart size={16} className="text-red-500 mr-2" />
            <div className="text-sm">
              <span className="font-medium">Primary condition:</span> {patient.condition}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientCard;