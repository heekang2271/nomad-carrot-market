'use client';

import { ButtonHTMLAttributes } from 'react';
import { useFormStatus } from 'react-dom';

interface ButtonProps {}

const Button = ({ children, ...rest }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { pending } = useFormStatus();
  return (
    <button
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
      disabled={pending}
      {...rest}
    >
      {pending ? '로딩 중' : children}
    </button>
  );
};

export default Button;
