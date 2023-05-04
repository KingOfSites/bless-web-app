import { InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: String;
}
export const Input = (props: InputProps) => {
  return (
    <div
      className=" width100perc  padding-form"
      style={{ border: "none", background: "none" }}
    >
      <label className="label">{props.labelText}</label>
      <input {...props} className="input input-element " />
    </div>
  );
};
