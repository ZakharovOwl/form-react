import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//style
import TextField from "@material-ui/core/TextField";

const schema = yup.object().shape({
  name: yup.string().min(2).max(255).required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(255),
});

const Registration = ({
  email,
  setEmail,
  password,
  setPassword,
  setApiToken,
  instance,
  username,
  setUsername,
  avatarFile,
  setAvatarFile,
}) => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    if (avatarFile) {
      formData.append("avatar", avatarFile, avatarFile.name);
    }
    formData.append("email", email);
    formData.append("name", username);
    formData.append("password", password);
    formData.append("password_confirmation", password);

    console.log(data);
    instance
      .post(
        //url
        "/auth/register",
        //данные запроса
        formData,
        //header для указания типа контента
        {
          headers: { "Content-type": "multipart/form-data" },
        }
      )
      //обрабатываем результат
      .then(function (response) {
        console.log("Я получил:", response.data);
      })
      //обрабатываем ошибку
      .catch(function (error) {
        console.log(error.response.data);
      });

    history.push("/login");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <div className="btn-title">
          <h3>Registration</h3>
        </div>
        <p>{errors.email?.message}</p>
        <TextField
          inputRef={register}
          id="outlined-email-input"
          label="Email"
          variant="outlined"
          placeholder="Enter your email."
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <p>{errors.name?.message}</p>
        <TextField
          inputRef={register}
          id="outlined-password-input"
          label="Name"
          type="text"
          variant="outlined"
          name="name"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <p>{errors.password?.message}</p>
        <TextField
          inputRef={register}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="file"
          name="avatar"
          multiple
          accept=".bmp, .jpeg, .png"
          label="Avatar"
          ref={register}
          onChange={(event) => setAvatarFile(event.target.files[0])}
        ></input>
        <div className="btn-wrapper">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
