import * as yup from 'yup';

export const schema = yup.object({
  email: yup.string().email().required('Um email precisa ser fornecido'),
  password: yup.string().required('A senha é obrigatória'),
});

export type LoginDiscipleMaker = yup.InferType<typeof schema>;
