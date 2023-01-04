import { useForm } from "react-hook-form";

const Checkbox = ({ name,className,labelClassName,dataToggle,dataTarget, label, register, required }) => (
  <>
    <input name={name} type="checkbox"  className={className} id={name} {...register(label, { required })} />
   
    <label className={labelClassName} htmlFor={name} data-toggle={dataToggle} data-target={dataTarget}>{label}</label>
  </>
);


export default Checkbox;