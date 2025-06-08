import React from 'react';
import { Grid, List, PlusCircle, PlusCircleIcon, Search } from 'lucide-react';
import { PatientType } from '@/types/types';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { Avatar } from '../ui/avatar';
import PatientCard from './patient-card';
import { Badge } from '../ui/badge';

interface PatientListProps {
  patients: PatientType[];
  onViewAll?: () => void;
  onAddNew?: () => void;
}

const PatientList: React.FC<PatientListProps> = ({
  patients,
  onViewAll,
  onAddNew,
}) => {
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Recent Patients</h3>
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
              //icon={<PlusCircleIcon size={16} />}
              onClick={onAddNew}
            >
              <PlusCircleIcon size={16} className="mr-2" />
              New
            </Button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="relative flex-1 max-w-sm">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex ml-4 bg-gray-100 rounded-md p-1">
            <button
              className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={18} className="text-gray-600" />
            </button>
            <button
              className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <List size={18} className="text-gray-600" />
            </button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow overflow-auto">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {patients.map((patient) => (
              <PatientCard key={patient.id} patient={patient} />
            ))}
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {patients.map((patient) => (
              <div key={patient.id} className="py-4 flex items-center hover:bg-gray-50 px-3 cursor-pointer">
                <Avatar 
                  src={patient.avatar}
                  alt={patient.name}
                  size="md" 
                  name={patient.name}                
                />
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">{patient.name}</h4>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{patient.gender}, {patient.age} yrs</span>
                    <span className="mx-2">•</span>
                    <span>{patient.condition}</span>
                  </div>
                </div>
                <div className="ml-auto flex space-x-2 items-center">
                  {patient.critical && (
                    <Badge variant="destructive" size="sm">Critical</Badge>
                  )}
                  <Badge variant="secondary" size="sm">Last: {patient.lastVisit}</Badge>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
export default PatientList;