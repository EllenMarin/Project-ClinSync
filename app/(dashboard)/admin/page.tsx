import { DashboardCards } from '@/components/dashboardAdmin/dashboard-cards';
import { AppointmentsTable } from '@/components/dashboardAdmin/appointments-table';
import { DashboardCharts } from '@/components/dashboardAdmin/dashboard-charts';
import { SpecialtiesCards } from '@/components/dashboardAdmin/specialties-cards';
import { DashboardHeader } from '@/components/dashboardAdmin/dashboard-header';
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