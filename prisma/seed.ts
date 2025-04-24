import { PrismaClient, Role, AppointmentStatus } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Starting seeding...');

    // Clear existing data (optional - be careful in production)
    console.log('Clearing existing data...');
    await prisma.appointment.deleteMany({});
    await prisma.patient.deleteMany({});
    await prisma.doctor.deleteMany({});
    await prisma.admin.deleteMany({});
    await prisma.user.deleteMany({});
    console.log('Existing data cleared.');

    // Create admin user
    const adminPassword = await hash('admin123', 10);
    const admin = await prisma.user.create({
      data: {
        email: 'admin@clinsync.com',
        password: adminPassword,
        name: 'Admin User',
        role: Role.ADMIN,
        adminProfile: {
          create: {
            department: 'IT Administration',
          },
        },
      },
    });
    console.log(`Created admin user with id: ${admin.id}`);

    // Create doctors
    const doctorPassword = await hash('doctor123', 10);
    
    const doctor1 = await prisma.user.upsert({
      where: { email: 'cardio@clinsync.com' },
      update: {},
      create: {
        email: 'cardio@clinsync.com',
        password: doctorPassword,
        name: 'Dr. Maria Cardoso',
        role: Role.DOCTOR,
        doctorProfile: {
          create: {
            specialty: 'Cardiologia',
            licenseNumber: 'CRM-12345',
          },
        },
      },
      include: {
        doctorProfile: true,
      },
    });
    console.log(`Created doctor with id: ${doctor1.id}`);

    const doctor2 = await prisma.user.upsert({
      where: { email: 'neuro@clinsync.com' },
      update: {},
      create: {
        email: 'neuro@clinsync.com',
        password: doctorPassword,
        name: 'Dr. João Silva',
        role: Role.DOCTOR,
        doctorProfile: {
          create: {
            specialty: 'Neurologia',
            licenseNumber: 'CRM-67890',
          },
        },
      },
      include: {
        doctorProfile: true,
      },
    });
    console.log(`Created doctor with id: ${doctor2.id}`);

    const doctor3 = await prisma.user.upsert({
      where: { email: 'dermato@clinsync.com' },
      update: {},
      create: {
        email: 'dermato@clinsync.com',
        password: doctorPassword,
        name: 'Dr. Sofia Almeida',
        role: Role.DOCTOR,
        doctorProfile: {
          create: {
            specialty: 'Dermatologia',
            licenseNumber: 'CRM-23456',
          },
        },
      },
      include: {
        doctorProfile: true,
      },
    });
    console.log(`Created doctor with id: ${doctor3.id}`);

    const doctor4 = await prisma.user.upsert({
      where: { email: 'ortopedia@clinsync.com' },
      update: {},
      create: {
        email: 'ortopedia@clinsync.com',
        password: doctorPassword,
        name: 'Dr. Ricardo Martins',
        role: Role.DOCTOR,
        doctorProfile: {
          create: {
            specialty: 'Ortopedia',
            licenseNumber: 'CRM-34567',
          },
        },
      },
      include: {
        doctorProfile: true,
      },
    });
    console.log(`Created doctor with id: ${doctor4.id}`);

    const doctor5 = await prisma.user.upsert({
      where: { email: 'pediatria@clinsync.com' },
      update: {},
      create: {
        email: 'pediatria@clinsync.com',
        password: doctorPassword,
        name: 'Dra. Beatriz Costa',
        role: Role.DOCTOR,
        doctorProfile: {
          create: {
            specialty: 'Pediatria',
            licenseNumber: 'CRM-45678',
          },
        },
      },
      include: {
        doctorProfile: true,
      },
    });
    console.log(`Created doctor with id: ${doctor5.id}`);

    // Create patients
    const patientPassword = await hash('patient123', 10);
    
    const patient1 = await prisma.user.upsert({
      where: { email: 'ana@example.com' },
      update: {},
      create: {
        email: 'ana@example.com',
        password: patientPassword,
        name: 'Ana Oliveira',
        role: Role.PATIENT,
        patientProfile: {
          create: {
            dateOfBirth: new Date('1985-05-15'),
            address: 'Rua das Flores, 123, Lisboa',
            phone: '+351 912 345 678',
          },
        },
      },
      include: {
        patientProfile: true,
      },
    });
    console.log(`Created patient with id: ${patient1.id}`);

    const patient2 = await prisma.user.upsert({
      where: { email: 'pedro@example.com' },
      update: {},
      create: {
        email: 'pedro@example.com',
        password: patientPassword,
        name: 'Pedro Santos',
        role: Role.PATIENT,
        patientProfile: {
          create: {
            dateOfBirth: new Date('1990-10-20'),
            address: 'Avenida da República, 45, Porto',
            phone: '+351 923 456 789',
          },
        },
      },
      include: {
        patientProfile: true,
      },
    });
    console.log(`Created patient with id: ${patient2.id}`);

    const patient3 = await prisma.user.upsert({
      where: { email: 'mariana@example.com' },
      update: {},
      create: {
        email: 'mariana@example.com',
        password: patientPassword,
        name: 'Mariana Costa',
        role: Role.PATIENT,
        patientProfile: {
          create: {
            dateOfBirth: new Date('1978-03-25'),
            address: 'Rua do Comércio, 78, Braga',
            phone: '+351 934 567 890',
          },
        },
      },
      include: {
        patientProfile: true,
      },
    });
    console.log(`Created patient with id: ${patient3.id}`);

    const patient4 = await prisma.user.upsert({
      where: { email: 'tiago@example.com' },
      update: {},
      create: {
        email: 'tiago@example.com',
        password: patientPassword,
        name: 'Tiago Mendes',
        role: Role.PATIENT,
        patientProfile: {
          create: {
            dateOfBirth: new Date('1995-07-12'),
            address: 'Avenida Central, 34, Coimbra',
            phone: '+351 945 678 901',
          },
        },
      },
      include: {
        patientProfile: true,
      },
    });
    console.log(`Created patient with id: ${patient4.id}`);

    const patient5 = await prisma.user.upsert({
      where: { email: 'sofia@example.com' },
      update: {},
      create: {
        email: 'sofia@example.com',
        password: patientPassword,
        name: 'Sofia Rodrigues',
        role: Role.PATIENT,
        patientProfile: {
          create: {
            dateOfBirth: new Date('1982-12-03'),
            address: 'Rua da Liberdade, 56, Faro',
            phone: '+351 956 789 012',
          },
        },
      },
      include: {
        patientProfile: true,
      },
    });
    console.log(`Created patient with id: ${patient5.id}`);

    const patient6 = await prisma.user.upsert({
      where: { email: 'rafael@example.com' },
      update: {},
      create: {
        email: 'rafael@example.com',
        password: patientPassword,
        name: 'Rafael Alves',
        role: Role.PATIENT,
        patientProfile: {
          create: {
            dateOfBirth: new Date('1973-09-18'),
            address: 'Praça da República, 23, Aveiro',
            phone: '+351 967 890 123',
          },
        },
      },
      include: {
        patientProfile: true,
      },
    });
    console.log(`Created patient with id: ${patient6.id}`);

    const patient7 = await prisma.user.upsert({
      where: { email: 'carolina@example.com' },
      update: {},
      create: {
        email: 'carolina@example.com',
        password: patientPassword,
        name: 'Carolina Ferreira',
        role: Role.PATIENT,
        patientProfile: {
          create: {
            dateOfBirth: new Date('1998-02-27'),
            address: 'Rua dos Clérigos, 89, Porto',
            phone: '+351 978 901 234',
          },
        },
      },
      include: {
        patientProfile: true,
      },
    });
    console.log(`Created patient with id: ${patient7.id}`);

    // Create appointments
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(10, 0, 0, 0);

    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    nextWeek.setHours(14, 30, 0, 0);

    const twoWeeks = new Date();
    twoWeeks.setDate(twoWeeks.getDate() + 14);
    twoWeeks.setHours(9, 15, 0, 0);

    const threeWeeks = new Date();
    threeWeeks.setDate(threeWeeks.getDate() + 21);
    threeWeeks.setHours(16, 0, 0, 0);

    const oneMonth = new Date();
    oneMonth.setMonth(oneMonth.getMonth() + 1);
    oneMonth.setHours(11, 30, 0, 0);

    // First, clear any existing appointments
    await prisma.appointment.deleteMany({});
    console.log('Cleared existing appointments');

    // Check if profiles exist before creating appointments
    if (!patient1.patientProfile || !doctor1.doctorProfile) {
      throw new Error('Patient or doctor profile missing for appointment 1');
    }

    const appointment1 = await prisma.appointment.create({
      data: {
        patientId: patient1.patientProfile.id,
        doctorId: doctor1.doctorProfile.id,
        date: tomorrow,
        status: AppointmentStatus.SCHEDULED,
        notes: 'Consulta de rotina - Cardiologia',
      },
    });
    console.log(`Created appointment with id: ${appointment1.id}`);

    if (!patient2.patientProfile || !doctor2.doctorProfile) {
      throw new Error('Patient or doctor profile missing for appointment 2');
    }

    const appointment2 = await prisma.appointment.create({
      data: {
        patientId: patient2.patientProfile.id,
        doctorId: doctor2.doctorProfile.id,
        date: nextWeek,
        status: AppointmentStatus.SCHEDULED,
        notes: 'Primeira consulta - Neurologia',
      },
    });
    console.log(`Created appointment with id: ${appointment2.id}`);

    if (!patient3.patientProfile || !doctor3.doctorProfile) {
      throw new Error('Patient or doctor profile missing for appointment 3');
    }

    const appointment3 = await prisma.appointment.create({
      data: {
        patientId: patient3.patientProfile.id,
        doctorId: doctor3.doctorProfile.id,
        date: twoWeeks,
        status: AppointmentStatus.SCHEDULED,
        notes: 'Avaliação de manchas na pele',
      },
    });
    console.log(`Created appointment with id: ${appointment3.id}`);

    if (!patient4.patientProfile || !doctor4.doctorProfile) {
      throw new Error('Patient or doctor profile missing for appointment 4');
    }

    const appointment4 = await prisma.appointment.create({
      data: {
        patientId: patient4.patientProfile.id,
        doctorId: doctor4.doctorProfile.id,
        date: threeWeeks,
        status: AppointmentStatus.SCHEDULED,
        notes: 'Dor no joelho após atividade física',
      },
    });
    console.log(`Created appointment with id: ${appointment4.id}`);

    if (!patient5.patientProfile || !doctor5.doctorProfile) {
      throw new Error('Patient or doctor profile missing for appointment 5');
    }

    const appointment5 = await prisma.appointment.create({
      data: {
        patientId: patient5.patientProfile.id,
        doctorId: doctor5.doctorProfile.id,
        date: oneMonth,
        status: AppointmentStatus.SCHEDULED,
        notes: 'Consulta pediátrica de rotina',
      },
    });
    console.log(`Created appointment with id: ${appointment5.id}`);

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error during seeding:');
    console.error(error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error('Failed to seed database:');
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Disconnecting from database...');
    await prisma.$disconnect();
    console.log('Disconnected from database.');
  });
