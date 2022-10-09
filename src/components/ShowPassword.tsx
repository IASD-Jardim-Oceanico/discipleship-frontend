import React, { ReactNode } from 'react';
import { eye } from './icons/eye';
import { eyeSlash } from './icons/eyeSlash';

type ShowPassword = {
  showPassword: boolean;
  onClick: () => void;
  children: ReactNode
};

function ShowPassword({ showPassword, onClick, children }: ShowPassword) {
  return (
    <div className='relative'>
      {children}
      <div className='flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5'>
        <button type='button' onClick={() => onClick()} className='text-[#2BBFCF]'>
          {showPassword ? eyeSlash : eye}
        </button>
      </div>
    </div>
  );
}

export default ShowPassword;
