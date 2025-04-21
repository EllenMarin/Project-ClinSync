Projeto Next.js com sistema de notificação Toast
Sistema de notificação Toast (hooks/use-toast.ts)

✅ Checklist por Etapas 

 🔧 1. Setup Inicial Criar repositório no GitHub

Criar projeto com:

React e Next.js

Instalar: Tailwind CSS, Fastify para API backend, Zod para validações de schemas e Prisma para ORM

👥 2. Modelagem de Dados 

Médico, id (número de empregado), nome, especialidade, etc.

Paciente, id, nome, email, etc.

Consulta, id (por médico: consulta 1, 2, etc), data, id_médico, id_paciente, medicação prescritos

Medicação, id, nome

🛠 3. Back-end com Fastify + Zod Rotas de autenticação (simples ou JWT)

CRUD Médicos (restrito ao admin)

CRUD Pacientes (aberto e via admin)

CRUD Consultas

Lista de medicação

Verificação de data futura + agenda livre

🖥 4. Front-end React Tela de Login (diferenciar paciente, médico, admin)

Registro de paciente

Registro de médico (admin)

Marcação de consulta (paciente)

Visualizar agenda (paciente e médico)

Ficha do paciente (médico)

Registro de consulta (admin e paciente)

🔒 5. Controle de Acesso Paciente só vê os próprios dados

Médico vê ficha dos seus pacientes

Admin vê todos os dados

Proteção de rotas no front e no back

🚀 6. Deploy Frontend na Vercel

Backend na Vercel 