export type User = {
    createdAt: string,
    dataNascimento: string,
    email: string,
    id: number,
    nome: string,
    senha: string,
    status: string,
    tipoUsuario: 'aluno' | 'professor' | 'admin',
    updatedAt: string,
  };
  