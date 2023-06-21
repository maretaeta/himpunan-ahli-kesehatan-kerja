import { useState } from "react";
import logo from '../../assets/pakki.png'
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const handleClickHome = () => {
    navigate('/')
  }
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app shadow-xl mt-20 md:mx-auto mx-7 flex justify-center max-w-md rounded-md py-5 bg-gray-200">
      <form onSubmit={handleSubmit}>
      <img src={logo} className="mx-auto py-5" />
        <h1 className="text-center text-3xl font-bold text-black">Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="mt-5 mx-auto flex py-2 px-5 text-xl">
          Submit
        </button>
        <div className="md:flex gap-2 pt-3 text-sm mx-5">
          <p>kembali ke halaman utama ? </p>
          <p onClick={() => handleClickHome()} className="text-blue-600">
            Home
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
