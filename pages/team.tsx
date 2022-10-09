import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Input from '../components/Input';
import ShowPassword from '../components/ShowPassword';
import { createDiscipleMaker } from '../services/disciple-maker';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { DiscipleMakerDTO } from '../interfaces';

const schema = yup.object({
  fullName: yup.string().required('Precisa de um nome').min(3, 'O nome não pode ser menor que 3'),
  email: yup.string().email().required('Email inválido'),
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

interface DiscipleMaker extends DiscipleMakerDTO {
  confirmPassword: string;
}

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DiscipleMaker>({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit: SubmitHandler<DiscipleMaker> = (data) => {
    const {confirmPassword, ...payload} = data;
    payload.role = 'DISCIPLE_MAKER';
    return createDiscipleMaker(payload);
  };

  return (
    <main className='bg-gray-200 min-h-screen flex flex-col'>
      <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
          <h1 className='mb-8 text-3xl text-center flex justify-around items-center mt-6 font-bold tracking-tight text-gray-900'>
            <Image
              width='48px'
              height='48px'
              src='/images/L2.png'
              alt='Amigos do Jardim Oceânico'
            />
            <span className=''>Cadastre-se</span>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <span className='text-red-200 text-sm'>{errors.fullName?.message}</span>
            <Input type='text' placeholder='Nome Completo' {...register('fullName')} />

            <span className='text-red-200 text-sm'>{errors.email?.message}</span>
            <Input type='text' placeholder='Email' {...register('email')} />

            <div className='relative'>
              <span className='text-red-200 text-sm'>{errors.phone?.message}</span>
              <Input type='text' placeholder='Telefone' {...register('phone')} />

              <div className='flex items-center absolute inset-y-0 right-2 mr-3  text-sm leading-5 text-[#2BBFCF]'>
                *
              </div>
            </div>

            <span className='text-red-200 text-sm'>{errors.password?.message}</span>
            <ShowPassword
              showPassword={showPassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder='Senha'
                {...register('password')}
              />
            </ShowPassword>
            <span className='text-red-200 text-sm'>{errors.confirmPassword?.message}</span>
            <ShowPassword
              showPassword={showPassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder='Confimar Senha'
                {...register('confirmPassword')}
              />
            </ShowPassword>

            <div className='relative'>
              <div className='flex justify-start relative inset-y-0 mr-3  text-sm leading-5 text-[#2BBFCF]'>
                * opcional
              </div>
            </div>

            <button
              type='submit'
              className='w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1'
            >
              Criar Conta
            </button>
          </form>
        </div>

        <div className='text-gray-700 mt-6'>
          Já possui uma conta?{' '}
          <span className='no-underline border-b border-blue text-blue-500'>
            <Link href='/'>Entre</Link>
          </span>
          .
        </div>
      </div>
    </main>
  );
}

export default Registration;
