import React, { LegacyRef, MutableRefObject, Ref, RefObject } from 'react';

type Input = {
  type: string;
  name: string;
  placeholder: string;
  inputRef?: RefObject<HTMLInputElement>;
};

function Input({ type, name, placeholder,inputRef, ...props }: Input) {
  return (
    <input
      type={type}
      className='block border border-gray-300 w-full p-3 rounded mb-4'
      name={name}
      placeholder={placeholder}
      {...props}
      ref={inputRef}
    />
  );
}

export default Input;
