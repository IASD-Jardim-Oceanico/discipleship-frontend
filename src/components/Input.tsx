import { ForwardedRef, forwardRef } from 'react';

type Input = {
  type: string;
  name: string;
  placeholder: string;
};

function Input({ type, name, placeholder, ...props }: Input, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <input
      type={type}
      className='block border border-gray-300 w-full p-3 rounded mb-4'
      name={name}
      placeholder={placeholder}
      ref={ref}
      {...props}
    />
  );
}

export default forwardRef(Input);
