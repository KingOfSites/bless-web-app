import { ButtonHTMLAttributes, ReactElement, ReactNode, cloneElement } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <div className="separator20px flex flex-1">
      <button className="button">
      <span>{children}</span>
    </button>
    </div>
  );
};