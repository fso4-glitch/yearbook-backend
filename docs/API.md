# API do Yearbook — Documentação de Endpoints

Base URL (produção): `https://yearbook-backend.vercel.app`

## Convenções
- Todas as respostas são em JSON
- Rotas protegidas exigem Bearer token
- O campo senhaHash nunca é retornado

## Auth

### POST /auth/register
Cria conta

### POST /auth/login
Faz login

## Alunos

### GET /alunos
Lista alunos

### GET /alunos/:id
Busca aluno

### PUT /alunos/:id
Atualiza aluno

### DELETE /alunos/:id
Remove aluno

## Mensagens

### GET /mensagens
Lista mensagens

### POST /mensagens
Cria mensagem

### DELETE /mensagens/:id
Remove mensagem