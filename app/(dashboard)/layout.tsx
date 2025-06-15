import { Sidebar, UserRole } from '@/components/dashboardAdmin/sidebar';
import { Header } from '@/components/dashboardAdmin/header';
import { getRole } from '@/utils/roles';
import { Footer } from '@/components/footer';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const role = await getRole();
  
  return (
    <div className="flex h-screen overflow-hidden ">
      <Sidebar role={role as UserRole} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-primary-foreground p-4 md:p-6 ">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}