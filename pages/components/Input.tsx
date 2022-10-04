import React, { LegacyRef, MutableRefObject } from 'react';

type Input = {
  type: string;
  name: string;
  placeholder: string;
  ref?: MutableRefObject<string>;
};

function Input({ type, name, placeholder, ref, ...props }: Input) {
  return (
    <input
      type={type}
      className='block border border-gray-300 w-full p-3 rounded mb-4'
      name={name}
      placeholder={placeholder}
      {...props}
      ref={ref as LegacyRef<HTMLInputElement> | undefined}
    />
  );
}

export default Input;
