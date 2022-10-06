import { api } from './api';

type DiscipleMakerDTO = {
  email: string | undefined;
  password: string | undefined;
  role: string;
  full_name: string | undefined;
  phone?: string | undefined;
};

export function createDiscipleMaker(discipleMaker: DiscipleMakerDTO) {
  return api.post('/disciple-maker', discipleMaker);
}
