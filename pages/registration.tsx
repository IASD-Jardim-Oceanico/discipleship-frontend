import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useRef, useState } from 'react';
import { eye } from './components/icons/eye';
import { eyeSlash } from './components/icons/eyeSlash';
import Input from './components/Input';
import ShowPassword from './components/ShowPassword';

function Registration() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');

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
          <form onSubmit={() => {}}>
            <Input type='text' name='fullname' placeholder='Nome Completo' ref={nameRef} />

            <Input type='text' name='email' placeholder='Email' ref={emailRef} />

            <div className='relative'>
              <Input type='text' name='phone' placeholder='Telefone' ref={phoneRef} />
              <div className='flex items-center absolute inset-y-0 right-2 mr-3  text-sm leading-5 text-[#2BBFCF]'>
                *
              </div>
            </div>

            <ShowPassword
              showPassword={showPassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              <Input
                type={showPassword ? 'text' : 'password'}
                name='password'
                placeholder='Senha'
                ref={passwordRef}
              />
            </ShowPassword>
            <ShowPassword
              showPassword={showPassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              <Input
                type={showPassword ? 'text' : 'password'}
                name='confirm_password'
                placeholder='Confimar Senha'
                ref={confirmPasswordRef}
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
