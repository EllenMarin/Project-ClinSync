"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { PatientsList } from '@/components/dashboardPatients/patients-list';
import { AddPatientDialog } from '@/components/dashboardPatients/add-patient-dialog';

export default function PatientsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Patients</h1>
        <Button onClick={() => setOpen(true)} className="w-full sm:w-auto">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Patient
        </Button>
      </div>
      
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search patients..."
          className="w-full bg-background pl-8 md:max-w-sm"
        />
      </div>
      
      <PatientsList />
      <AddPatientDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}