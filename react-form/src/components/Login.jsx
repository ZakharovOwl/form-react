import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(5),
});

const Login = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    history.push("/registration");
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>
        <p>{errors.email?.message}</p>
        <input
          name="email"
          type="text"
          placeholder="Enter your email."
          ref={register}
          label="Email"
        />
        <p>{errors.password?.message}</p>
        <input
          name="password"
          type="password"
          placeholder="Enter your password..."
          ref={register}
          label="Password"
        />

        <button type="submit">Registration</button>
      </form>
    </div>
  );
};

export default Login;
