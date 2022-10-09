import * as yup from 'yup';

export const schema = yup.object({
  fullName: yup.string().required('Precisa de um nome').min(3, 'O nome não pode ser menor que 3'),
  email: yup.string().email('Email inválido').required('Email inválido'),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(8, 'A senha precisa ter 8 ou mais caracteres'),
  confirmPassword: yup
    .string()
    .required('A senha é obrigatória')
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
  phone: yup.string().optional().length(11, 'Número de telefone inválido'),
});

export type DiscipleMaker = yup.InferType<typeof schema>;
