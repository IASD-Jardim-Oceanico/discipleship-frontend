import { api } from './api';

type CreateUserDTO = {
  email: string | undefined;
  password: string | undefined;
  role: string;
  full_name: string | undefined;
  phone?: string | undefined;
};

export function createUser(createUserDTO: CreateUserDTO) {
  return api.post('/users', createUserDTO);
}
