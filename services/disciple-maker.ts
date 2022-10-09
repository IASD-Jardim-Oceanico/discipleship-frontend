import { DiscipleMakerDTO } from '../interfaces';
import { api } from './api';

function normalizeCreateDiscipleMaker(payload: DiscipleMakerDTO) {
  const { fullName, ...rest } = payload;

  return {
    ...rest,
    full_name: fullName,
  };
}

export function createDiscipleMaker(discipleMaker: DiscipleMakerDTO) {
  return api.post('/disciple-maker', normalizeCreateDiscipleMaker(discipleMaker));
}
