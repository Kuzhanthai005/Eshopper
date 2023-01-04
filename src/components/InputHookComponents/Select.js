import React from "react";
import { useForm } from "react-hook-form";

const Select = React.forwardRef(({ className, options, onChange, onBlur, name, label }, ref) => (
    <>
        <label>{label}</label>
        <select className={className} name={name} ref={ref} onChange={onChange} onBlur={onBlur}>

            {
                options.map((option,key) => {
                    return (
                        <option value={option} key={key}>{option}</option>
                    )
                })
            }

        </select>
    </>
));

export default Select