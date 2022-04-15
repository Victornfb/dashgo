import { useQuery } from "react-query";
import { api } from "../services/api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export async function getUSers(): Promise<User[]> {
  const { data } = await api.get('users')

  const users = await data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email:user.email,
      createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    }
  });

  return users;
}

export function useUsers() {
  return useQuery('users', getUSers, {
    staleTime: 1000 * 5,
  })
}