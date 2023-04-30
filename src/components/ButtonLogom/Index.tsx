import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import './style.scss'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <>
      <button className="button">
      {children} <FontAwesomeIcon icon={faArrowRightToBracket} className='icon'/>
    </button>
    </>
  );
};