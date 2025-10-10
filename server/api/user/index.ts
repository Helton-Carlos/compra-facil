import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.email || !body.password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Nome e email são obrigatórios.',
    });
  }

  const newUser = {
    id: Date.now(), 
    email: body.email,
    password: body.password,
    createdAt: new Date(),
  };

  return {
    message: 'Usuário criado com sucesso!',
    user: newUser,
  };
});