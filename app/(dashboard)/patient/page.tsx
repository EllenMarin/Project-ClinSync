"use client";
import React from 'react';
import MoreInformation from '@/components/dashboardPatients/more-information';
import Pharmacy from '@/components/dashboardPatients/pharmacy';
import HealthActivity from '@/components/dashboardPatients/health-activity';
import Timeline from '@/components/dashboardPatients/timeline';
import Reports from '@/components/dashboardPatients/reports';
import DoctorVisits from '@/components/dashboardPatients/doctor-visits';
import ChartsSection from '@/components/dashboardPatients/charts-section';
import VitalsCharts from '@/components/dashboardPatients/vitals-charts';
import PrescriptionReports from '@/components/dashboardPatients/prescription-and-reports';
import VisitsTable from '@/components/dashboardPatients/visits-table';
import PatientDetails from '@/components/dashboardPatients/patient-details';

const PatientPage = () => {
 
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>Patients Dashboard</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Patient Profile</h1>
        </div>

        <PatientDetails />

        <VisitsTable/>

        <PrescriptionReports />

        <VitalsCharts />

        <ChartsSection />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <DoctorVisits />

          <Reports />

          <Timeline />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <HealthActivity />

          <Pharmacy />

          <MoreInformation />
            
        </div>
      </div>
    </div>
  );
};

export default PatientPage;