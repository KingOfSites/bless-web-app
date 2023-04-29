import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <div className="separator20px flex flex-1 width100perc">
      <button className="button">
      <span>{children}</span>
    </button>
    </div>
  );
};