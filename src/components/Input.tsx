import { InputHTMLAttributes, ReactElement, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  icon?: ReactElement;
}

export const Input = (props: InputProps) => {
  return (
    <input type="email" className="input" placeholder="E-mail" />
   );
};