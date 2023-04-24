import { InputHTMLAttributes, ReactElement, ReactNode } from 'react';

interface InputsenhaProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  icon?: ReactElement;
}

export const Input = (props: InputsenhaProps) => {
  return (
    <input type="password" className="input" placeholder="Senha" />
   );
};