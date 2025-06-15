"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { DoctorsList } from '@/components/dashboardDoctors/doctors-list';
import { AddDoctorDialog } from '@/components/dashboardDoctors/add-doctor-dialog';

export default function DoctorsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Doctors</h1>
        <Button onClick={() => setOpen(true)} className="w-full sm:w-auto">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Doctor
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search doctors..."
          className="w-full bg-background pl-8 md:max-w-sm"
        />
      </div>

      <DoctorsList />
      <AddDoctorDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
