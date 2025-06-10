"use client";

import CardHelloDoctor from "@/components/dashboardDoctor/card-hello-doctor";
import { Activity, Calendar, CheckSquare, Users } from "lucide-react";
import StatCard from "@/components/dashboardDoctor/stat-card";
import AppointmentList from '@/components/dashboardDoctor/appointment-list';
import TaskList from '@/components/dashboardDoctor/task-list';
import { AppointmentType, PatientType, TaskType } from '@/types/types';
import PatientList from "@/components/dashboardDoctor/patient-list";
import QuickActions from "@/components/dashboardDoctor/quick-actions";
import { useRouter } from "next/navigation";
import { AddPatientDialog } from "@/components/dashboardPatients/add-patient-dialog";
import { useState } from "react";
import { AddTaskDialog } from "@/components/dashboardDoctor/add-doctor-dialog";

const appointments: AppointmentType[] = [
  {
    id: '1',
    patient: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    date: new Date(2025, 5, 15),
    time: '9:00 - 9:30',
    reason: 'Annual checkup',
    status: 'confirmed',
    location: 'Room 103'
  },
  {
    id: '2',
    patient: {
      name: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    date: new Date(2025, 5, 15),
    time: '10:00 - 10:30',
    reason: 'Blood pressure follow-up',
    status: 'scheduled',
    location: 'Room 105'
  },
  {
    id: '3',
    patient: {
      name: 'Emily Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
    },
    date: new Date(2025, 5, 15),
    time: '11:30 - 12:00',
    reason: 'Prescription refill',
    status: 'confirmed',
    location: 'Room 102'
  },
  {
    id: '4',
    patient: {
      name: 'David Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    date: new Date(2025, 5, 15),
    time: '19:00 - 19:45',
    reason: 'Heart condition evaluation',
    status: 'confirmed',
    location: 'Room 107'
  },
  {
    id: '5',
    patient: {
      name: 'Lisa Thompson',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
    date: new Date(2025, 5, 15),
    time: '15:30 - 16:00',
    reason: 'Vaccination',
    status: 'scheduled',
    location: 'Room 104'
  }
];

const patients: PatientType[] = [
  {
    id: 'P-10042',
    name: 'James Anderson',
    avatar: 'https://unsplash.com/pt-br/fotografias/homem-usando-oculos-e-top-sem-mangas-Py8F6-hRn5o',
    age: 45,
    gender: 'Male',
    phone: '(+351) 912 345 567',
    email: 'james.anderson@example.com',
    condition: 'Hypertension',
    lastVisit: '12 May 2025',
    critical: false
  },
  {
    id: 'P-10043',
    name: 'Maria Garcia',
    avatar: 'https://unsplash.com/pt-br/fotografias/uma-mulher-com-cabelos-cacheados-sorrindo-para-a-camera-RPcX5545QfI',
    age: 38,
    gender: 'Female',
    phone: '(+351) 912 345 543',
    email: 'maria.garcia@example.com',
    condition: 'Diabetes Type 2',
    lastVisit: '3 May 2025',
    critical: true
  },
  {
    id: 'P-10044',
    name: 'Robert Smith',
    avatar: 'https://unsplash.com/pt-br/fotografias/homem-usando-oculos-e-top-sem-mangas-Py8F6-hRn5o',
    age: 62,
    gender: 'Male',
    phone: '(+351) 912 345 678',
    email: 'robert.smith@example.com',
    condition: 'Arthritis',
    lastVisit: '28 Apr 2025',
    critical: false
  },
  {
    id: 'P-10045',
    name: 'Jennifer Taylor',
    avatar: 'https://unsplash.com/pt-br/fotografias/mulher-na-camisa-preta-de-manga-comprida-sentada-no-sofa-branco-n1B6ftPB5Eg',
    age: 29,
    gender: 'Female',
    phone: '(+351) 912 345 789',
    email: 'jennifer.taylor@example.com',
    condition: 'Asthma',
    lastVisit: '15 Apr 2025',
    critical: false
  },
  {
    id: 'P-10046',
    name: 'David Brown',
    avatar: 'https://randomuser.me/api/portraits/men/39.jpg',
    age: 55,
    gender: 'Male',
    phone: '(+351) 912 345 890',
    email: 'david.brown@example.com',
    condition: 'Coronary Heart Disease',
    lastVisit: '10 Apr 2025',
    critical: true
  },
  {
    id: 'P-10047',
    name: 'Susan Williams',
    avatar: 'https://unsplash.com/pt-br/fotografias/uma-pessoa-segurando-um-laptop-7mBictB_urk',
    age: 41,
    gender: 'Female',
    phone: '(+351) 912 345 901',
    email: 'susan.williams@example.com',
    condition: 'Migraine',
    lastVisit: '5 Apr 2025',
    critical: false
  }
];

const tasks: TaskType[] = [
  {
    id: 't1',
    title: 'Review lab results for Maria Garcia',
    description: 'Check glucose levels and A1C. Update treatment plan if necessary.',
    completed: false,
    priority: 'high',
    dueDate: 'Today, 12:00'
  },
  {
    id: 't2',
    title: 'Complete medical report for James Anderson',
    description: 'Insurance form completion required.',
    completed: false,
    priority: 'medium',
    dueDate: 'Today, 15:00'
  },
  {
    id: 't3',
    title: 'Call pharmacy about prescription error',
    description: 'Dosage correction needed for patient #P-10045',
    completed: true,
    priority: 'high',
    dueDate: 'Yesterday, 13:00'
  },
  {
    id: 't4',
    title: 'Staff meeting preparation',
    description: 'Prepare slides for the weekly clinical staff meeting',
    completed: false,
    priority: 'medium',
    dueDate: 'Tomorrow, 9:00'
  },
  {
    id: 't5',
    title: 'Follow up with specialist about referral',
    description: 'Check status of cardiology referral for David Brown',
    completed: false,
    priority: 'low',
    dueDate: 'Tomorrow, 12:00'
  }
];


const DoctorPage = ()=> {
  const router = useRouter();

  const handleViewAllAppointments = () => {
    router.push('/appointments-list');
  }
  const handleAddNewAppointments = () => {
    router.push('/booking');
  }

  const [addTaskOpen, setAddTaskOpen] = useState(false);
  const handleAddTask = () => {
    setAddTaskOpen(true);
  }
  const handleViewAllPatients = () => {
    router.push('/patients');
  }

  const [addPatientOpen, setAddPatientOpen] = useState(false);
  const handleAddPatient = () => {
    setAddPatientOpen(true);
  }

  const handleActionClick = (action: string) => {
    console.log(`Action clicked: ${action}`);
    // implementar navigation logic para cada um links do QuickActions
  };

  return (
    <>
      <CardHelloDoctor/>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <StatCard
                title="Total Patients"
                value="1,284"
                icon={<Users size={24} />}
                change={{ value: 12, type: 'increase' }}
                color="bg-blue-100 text-blue-600"
              />
              <StatCard
                title="Today's Appointments"
                value="8"
                icon={<Calendar size={24} />}
                change={{ value: 5, type: 'increase' }}
                color="bg-purple-100 text-purple-600"
              />
              <StatCard
                title="Pending Tasks"
                value="12"
                icon={<CheckSquare size={24} />}
                change={{ value: 3, type: 'decrease' }}
                color="bg-yellow-100 text-yellow-600"
              />
              <StatCard
                title="Critical Patients"
                value="3"
                icon={<Activity size={24} />}
                change={{ value: 2, type: 'increase' }}
                color="bg-red-100 text-red-600"
              />
      </div>

      <QuickActions onActionClick={handleActionClick} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
        <AppointmentList 
          appointments={appointments}
          onViewAll={handleViewAllAppointments}
          onAddNew={handleAddNewAppointments}
        />
        
        <TaskList 
          tasks={tasks}
          onAddTask={handleAddTask}
          //onCompleteTask={handleCompleteTask}
        />
      </div>

      <PatientList 
          patients={patients} 
          onViewAll={handleViewAllPatients}
          onAddNew={handleAddPatient}
      />

      <AddTaskDialog
        open={addTaskOpen}
        onOpenChange={setAddTaskOpen}
      />

      <AddPatientDialog
        open={addPatientOpen}
        onOpenChange={setAddPatientOpen}
      />

    </>
  );
}  
export default DoctorPage;