import { LockClosedIcon } from '@heroicons/react/20/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthContext';
import { LoginDiscipleMaker, schema } from '../schemas/loginDiscipleMaker';

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDiscipleMaker>({
    resolver: yupResolver(schema),
  });

  const { login } = useContext(AuthContext);

  const onSubmit: SubmitHandler<LoginDiscipleMaker> = async (data) => {
    try {
      await login(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='bg-gray-200 min-h-screen flex flex-col'>
      <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 flex-1'>
        <div className='w-full max-w-md space-y-8 container'>
          <div>
            <div className='text-center'>
              <Image
                width='128px'
                height='128px'
                src='/images/L2.png'
                alt='Amigos do Jardim Oceânico'
              />
            </div>
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
              Entre com a sua conta
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600'>
              Ou{' '}
              <span className='font-medium text-indigo-600 hover:text-indigo-500'>
                <Link href='/team'>crie o cadastro e comece o discipulado</Link>
              </span>
            </p>
          </div>
          <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='-space-y-px rounded-md shadow-sm'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Endereço Email
                </label>
                <span>{errors.email?.message}</span>
                <input
                  id='email-address'
                  type='email'
                  autoComplete='email'
                  required
                  className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Endereço Email'
                  {...register('email')}
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Senha
                </label>
                <span>{errors.password?.message}</span>
                <input
                  id='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Senha'
                  {...register('password')}
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                />
                <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
                  Manter-se conectado
                </label>
              </div>

              <div className='text-sm'>
                <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                  Esqueceu sua senha?
                </a>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <LockClosedIcon
                    className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                    aria-hidden='true'
                  />
                </span>
                Entrar
              </button>
            </div>
            <div className='w-full md:w-full px-3 mb-6'></div>
            <div className='text-center'>
              <div className='mx-auto -mb-6 pb-1'>
                <span className='text-center text-sm text-gray-600'>ou entre com</span>
              </div>
              <div className='flex items-center w-full mt-2'>
                <div className='w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400'>
                  <button className='appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none'>
                    <svg viewBox='0 0 128 128' className='h-6 w-6 fill-current'>
                      <path
                        fill='#fff'
                        d='M44.59 4.21a63.28 63.28 0 004.33 120.9 67.6 67.6 0 0032.36.35 57.13 57.13 0 0025.9-13.46 57.44 57.44 0 0016-26.26 74.33 74.33 0 001.61-33.58H65.27v24.69h34.47a29.72 29.72 0 01-12.66 19.52 36.16 36.16 0 01-13.93 5.5 41.29 41.29 0 01-15.1 0A37.16 37.16 0 0144 95.74a39.3 39.3 0 01-14.5-19.42 38.31 38.31 0 010-24.63 39.25 39.25 0 019.18-14.91A37.17 37.17 0 0176.13 27a34.28 34.28 0 0113.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0087.2 4.59a64 64 0 00-42.61-.38z'
                      ></path>
                      <path
                        fill='#e33629'
                        d='M44.59 4.21a64 64 0 0142.61.37 61.22 61.22 0 0120.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 00-13.64-8 37.17 37.17 0 00-37.46 9.74 39.25 39.25 0 00-9.18 14.91L8.76 35.6A63.53 63.53 0 0144.59 4.21z'
                      ></path>
                      <path
                        fill='#f8bd00'
                        d='M3.26 51.5a62.93 62.93 0 015.5-15.9l20.73 16.09a38.31 38.31 0 000 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 01-5.5-40.9z'
                      ></path>
                      <path
                        fill='#587dbd'
                        d='M65.27 52.15h59.52a74.33 74.33 0 01-1.61 33.58 57.44 57.44 0 01-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0012.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z'
                      ></path>
                      <path
                        fill='#319f43'
                        d='M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0044 95.74a37.16 37.16 0 0014.08 6.08 41.29 41.29 0 0015.1 0 36.16 36.16 0 0013.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 01-25.9 13.47 67.6 67.6 0 01-32.36-.35 63 63 0 01-23-11.59A63.73 63.73 0 018.75 92.4z'
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className='w-full md:w-1/3 px-3 pt-4 mx-2'>
                  <button className='appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none'>
                    <svg viewBox='0 0 128 128' className='h-6 w-6 fill-current'>
                      <rect
                        fill='#3d5a98'
                        x='4.83'
                        y='4.83'
                        width='118.35'
                        height='118.35'
                        rx='6.53'
                        ry='6.53'
                      ></rect>
                      <path
                        fill='#fff'
                        d='M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z'
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className='w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400'>
                  <button className='appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none'>
                    <svg viewBox='0 0 128 128' className='h-6 w-6 fill-current'>
                      <path
                        d='M40.254 127.637c48.305 0 74.719-48.957 74.719-91.403 0-1.39 0-2.777-.075-4.156 5.141-4.547 9.579-10.18 13.102-16.633-4.79 2.602-9.871 4.305-15.078 5.063 5.48-4.02 9.582-10.336 11.539-17.774-5.156 3.743-10.797 6.38-16.68 7.801-8.136-10.586-21.07-13.18-31.547-6.32-10.472 6.86-15.882 21.46-13.199 35.617C41.922 38.539 22.246 26.336 8.915 6.27 1.933 20.94 5.487 39.723 17.022 49.16c-4.148-.172-8.207-1.555-11.832-4.031v.41c0 15.273 8.786 28.438 21.02 31.492a21.596 21.596 0 01-11.863.543c3.437 13.094 13.297 22.07 24.535 22.328-9.305 8.918-20.793 13.75-32.617 13.72-2.094 0-4.188-.15-6.266-.446 12.008 9.433 25.98 14.441 40.254 14.422'
                        fill='#1da1f2'
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
