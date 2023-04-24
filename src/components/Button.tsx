import { ButtonHTMLAttributes, ReactElement, ReactNode, cloneElement } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactElement;
}

export const Button = ({ children, icon }: ButtonProps) => {
  return (
    <button className="button">
      <span>{children}</span>
      {icon && cloneElement(icon, { className: 'fill-white w-7 h-7' })}
    </button>
  );
};