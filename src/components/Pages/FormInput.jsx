
import { useState } from "react";
import "./form_input.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput flex flex-col max-w-md justify-center mx-auto" >
      <label className="text-gray-600 pt-2">{label}</label>
      <input className="border-gray-500 border w-72 p-3 mx-auto rounded-md"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="p-1 text-red-600 hidden text-sm w-72">{errorMessage}</span>
    </div>
  );
};

export default FormInput;