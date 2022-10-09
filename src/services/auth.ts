import { LoginRequest } from '../interfaces';
import { LoginDiscipleMaker } from '../schemas/loginDiscipleMaker';
import { api } from './api';

export function loginRequest(payload: LoginDiscipleMaker): Promise<LoginRequest> {
  return api.post('/login', payload);
}
export function recoverUserInfo(userId: string): Promise<LoginRequest> {
  return api.get(`/disciple-maker/${userId}`);
}
