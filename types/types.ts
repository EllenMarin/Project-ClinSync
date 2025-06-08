export interface AppointmentType {
    id: string;
    patient: {
      name: string;
      avatar: string;
    };
    date: Date;
    time: string;
    reason: string;
    status: string;
    location: string;
  }
  
  export interface PatientType {
    id: string;
    name: string;
    avatar: string;
    age: number;
    gender: string;
    phone: string;
    email: string;
    condition: string;
    lastVisit: string;
    critical: boolean;
  }
  
  export interface TaskType {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    priority: string;
    dueDate: string;
  }

  // Adicionando interface para Avatar
  export interface AvatarType {
    name: string;
    src?: string;
    alt?: string;
    size?: "sm" | "md" | "lg";
  }

  // Adicionando interface para Doctor (baseado no contexto que você mostrou)
  export interface DoctorType {
    id: string;
    name: string;
    avatar?: string;
    doctorProfile: {
      specialty: string;
      licenseNumber: string;
      appointments?: {
        id: string;
        status: string;
        date: Date;
      }[];
    } | null;
  }
  