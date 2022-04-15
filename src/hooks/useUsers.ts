import { useQuery } from "react-query";
import { api } from "../services/api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

type GetUsersResponse = {
  totalCount: number;
  users: User[];
}

export async function getUSers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('users', {
    params: {
      page,
    }
  });

  const totalCount = Number(headers['x-total-count']);
  console.log(totalCount);

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

  return {
    users,
    totalCount,
  };
}

export function useUsers(page: number) {
  return useQuery(['users', page], () => getUSers(page), {
    staleTime: 1000 * 60 * 10,
  })
}