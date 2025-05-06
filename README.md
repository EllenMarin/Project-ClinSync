//TODO: 
    melhor design formulario sigin
    

Projeto Next.js com sistema de notificação Toast
Sistema de notificação Toast (hooks/use-toast.ts)

✅ Checklist por Etapas 

 🔧 1. Setup Inicial Criar repositório no GitHub

Criar projeto com:

React e Next.js

Instalar: Tailwind CSS, Fastify para API backend, Zod para validações de formulário(react hook forms) e Prisma para ORM

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

🔒 5. Sistema de controle de acesso baseado em papéis (RBAC) na aplicação, garantindo que apenas usuários autorizados possam acessar determinadas partes do sistema.

Médico vê ficha dos seus pacientes

Admin vê todos os dados

--- Proteção de rotas no front e no back ---

-> Fluxo de funcionamento:
1-Docker inicia container com PostgreSQL
2-Prisma se conecta ao banco usando a url definida em variáveis de ambiente
3-Schema do prisma define a estrutura das tabelas no banco
4-Seed popula o banco com dados iniciais
5-App usa client Prisma (de lib/prisma.ts) para fazer operações no banco

--- Fluxo de inicio de seção ---
1- Quando um usuário faz login, clerk atribui uma função ao usuário (paciente, médico, admin), armazenado nos metadados de sessão
2- Quando o usuario tenta acessar uma rota, o middleware intercepta a requisição
3- Middleware verifica se a função do usuário usando os metadados da sessão
4- Compara a rota solicitada com as rotas permitidas para aquela função usando matchers
5- Se o usuário não tem permição é redirecionado para a pagina inicial
    Admin -> pode acessar todas as rotas
    Doctor -> só pode acessar a rota doctor
    Patient -> só pode acessar a rota patient

🚀 6. Deploy Frontend na Vercel

Backend na Vercel 