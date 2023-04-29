import { InputHTMLAttributes } from 'react';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="separator20px flex flex-1 width100perc">
    <input
    {...props}
    className="input"
    />
    </div>
   );
};