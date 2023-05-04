import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import './style.scss'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  iconShow? :boolean
}

export const Button = ({ children, iconShow=true }: ButtonProps) => {
  return (
    <>
      <button className="button">
      {children} {iconShow && <FontAwesomeIcon icon={faArrowRightToBracket} className='icon'/>}
    </button>
    </>
  );
};