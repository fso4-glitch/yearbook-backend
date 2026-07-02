## Alunos

### GET /alunos

Lista todos os alunos.

- **Autenticação:** Não
- **Body:** Nenhum

- **Resposta de sucesso:** `200 OK`

```json
[
  {
    "id": 1,
    "nome": "Maria Silva",
    "email": "maria@email.com",
    "cidade": "Salinas",
    "frase": "Aqui começa o futuro.",
    "planosFuturos": "Cursar Ciência da Computação na UFMG",
    "fotoUrl": null,
    "role": "USER",
    "criadoEm": "2026-04-03T10:30:00.000Z"
  }
]
```

- **Erros:** Nenhum

---

### GET /alunos/:id

Busca um aluno pelo ID.

- **Autenticação:** Não
- **Body:** Nenhum

- **Resposta de sucesso:** `200 OK`

```json
{
  "id": 1,
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "cidade": "Salinas",
  "frase": "Aqui começa o futuro.",
  "planosFuturos": "Cursar Ciência da Computação na UFMG",
  "fotoUrl": null,
  "role": "USER",
  "criadoEm": "2026-04-03T10:30:00.000Z"
}
```

- **Erros:**
  - `404` — Aluno não encontrado

---

### PUT /alunos/:id

Atualiza o próprio perfil.

- **Autenticação:** Bearer token

- **Body:**

```json
{
  "nome": "Maria Silva",
  "cidade": "Salinas",
  "frase": "Nova frase",
  "planosFuturos": "Trabalhar como desenvolvedora",
  "fotoUrl": "https://exemplo.com/foto.jpg"
}
```

- **Resposta de sucesso:** `200 OK`

```json
{
  "id": 1,
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "cidade": "Salinas",
  "frase": "Nova frase",
  "planosFuturos": "Trabalhar como desenvolvedora",
  "fotoUrl": "https://exemplo.com/foto.jpg",
  "role": "USER",
  "criadoEm": "2026-04-03T10:30:00.000Z"
}
```

- **Erros:**
  - `401` — Não autenticado
  - `403` — Sem permissão
  - `404` — Aluno não encontrado

---

### DELETE /alunos/:id

Remove um aluno.

- **Autenticação:** Bearer token (admin)
- **Body:** Nenhum

- **Resposta de sucesso:** `204 No Content`

- **Erros:**
  - `401` — Não autenticado
  - `403` — Apenas administradores podem excluir alunos
  - `404` — Aluno não encontrado

---

## Mensagens

### GET /mensagens

Lista todas as mensagens do mural.

- **Autenticação:** Não
- **Body:** Nenhum

- **Resposta de sucesso:** `200 OK`

```json
[
  {
    "id": 1,
    "texto": "Obrigado por todos esses anos!",
    "imagemUrl": null,
    "autorId": 1,
    "autor": {
      "id": 1,
      "nome": "Maria Silva",
      "fotoUrl": null
    },
    "criadoEm": "2026-04-03T10:30:00.000Z"
  }
]
```

- **Erros:** Nenhum

---

### POST /mensagens

Cria uma nova mensagem.

- **Autenticação:** Bearer token

- **Body:**

```json
{
  "texto": "Obrigado por todos esses anos!",
  "imagemUrl": "https://exemplo.com/imagem.jpg"
}
```

- **Resposta de sucesso:** `201 Created`

```json
{
  "id": 1,
  "texto": "Obrigado por todos esses anos!",
  "imagemUrl": "https://exemplo.com/imagem.jpg",
  "autorId": 1,
  "criadoEm": "2026-04-03T10:30:00.000Z"
}
```

- **Erros:**
  - `400` — Campo texto obrigatório
  - `401` — Não autenticado

---

### DELETE /mensagens/:id

Exclui uma mensagem.

- **Autenticação:** Bearer token
- **Body:** Nenhum

- **Resposta de sucesso:** `204 No Content`

- **Erros:**
  - `401` — Não autenticado
  - `403` — Apenas o autor da mensagem ou um administrador pode excluir
  - `404` — Mensagem não encontrada