import { DashboardCards } from '@/components/dashboard/dashboard-cards';
import { AppointmentsTable } from '@/components/dashboard/appointments-table';
import { DashboardCharts } from '@/components/dashboard/dashboard-charts';
import { SpecialtiesCards } from '@/components/dashboard/specialties-cards';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { PatientsList } from '@/components/patients/patients-list';

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <DashboardCards />
      <SpecialtiesCards />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DashboardCharts />
        <AppointmentsTable />
      </div>
      <PatientsList />
    </div>
  );
}