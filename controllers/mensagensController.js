import prisma from '../prisma/client.js';

// GET /mensagens — lista todas as mensagens (mais recentes primeiro, com dados do autor)
export async function listarMensagens(req, res) {
  const mensagens = await prisma.mensagem.findMany({
    orderBy: { criadoEm: 'desc' },
    include: {
      autor: {
        select: {
          nome: true,
          fotoUrl: true,
        },
      },
    },
  });

  res.json(mensagens);
}

// POST /mensagens — cria uma nova mensagem
export async function criarMensagem(req, res) {
  const { texto, autorId } = req.body;

  if (!texto || texto.trim() === '') {
    return res.status(400).json({
      erro: 'Texto é obrigatório',
    });
  }

  const mensagem = await prisma.mensagem.create({
    data: {
      texto,
      autorId: Number(autorId),
    },
    include: {
      autor: {
        select: {
          nome: true,
          fotoUrl: true,
        },
      },
    },
  });

  return res.status(201).json(mensagem);
}

// DELETE /mensagens/:id — deleta uma mensagem
export async function deletarMensagem(req, res) {
  const { id } = req.params;

  try {
    await prisma.mensagem.delete({
      where: {
        id: Number(id),
      },
    });

    return res.status(204).end();
  } catch (error) {
    return res.status(404).json({
      erro: 'Mensagem não encontrada',
    });
  }
}