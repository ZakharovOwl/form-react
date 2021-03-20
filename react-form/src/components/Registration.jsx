import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .max(255)
    .required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(5).max(255),
});

const Registration = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    history.push("/answers");
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <h3>Registration</h3>
        <input
          type="file"
          name="avatar"
          multiple
          accept="image/*,image/jpeg,bmp,png"
          label="Avatar"
          ref={register}
        ></input>
        <p>{errors.email?.message}</p>
        <input
          name="email"
          type="text"
          placeholder="Enter your email."
          ref={register}
          label="Email"
        />
        <p>{errors.password?.name}</p>
        <input
          name="name"
          type="name"
          placeholder="Enter your name..."
          ref={register}
          label="Name"
          max="255"
        />
        <p>{errors.password?.message}</p>
        <input
          name="password"
          type="password"
          placeholder="Enter your password..."
          ref={register}
          label="Password"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Registration;
