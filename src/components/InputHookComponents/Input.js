import { useForm } from "react-hook-form";

const Input = ({ type, className, placeholder, label,name, register, required }) => (
  <>
      

    <label>{label}</label>
    { 
        label === "Email" ? 
        <input type={type} className={className} placeholder={placeholder} {...register(name, { required, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />

        :

         <input type={type} className={className} placeholder={placeholder} {...register(name, { required})} />
        
  }
    
  </>
);


export default Input;