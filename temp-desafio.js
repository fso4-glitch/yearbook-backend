import prisma from './prisma/client.js';

// Passo 1: criar mensagem
const novaMensagem = await prisma.mensagem.create({
  data: {
    texto: 'Salve, turma! Vamos com tudo nesse último ano!',
    autorId: 1,
  },
});

console.log('Mensagem criada:', novaMensagem);

// Passo 2: listar mensagens com autor
const mensagens = await prisma.mensagem.findMany({
  include: {
    autor: {
      select: {
        nome: true,
        fotoUrl: true,
      },
    },
  },
});

console.log(
  'Mensagens com autor:',
  JSON.stringify(mensagens, null, 2)
);

await prisma.$disconnect();