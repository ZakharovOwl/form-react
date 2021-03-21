import React from "react";

const LoginContent = ({
  username,
  checkLoginStatus,
  setCheckLoginStatus,
  history,
}) => {
  const outUser = (e) => {
    e.preventDefault();
    setCheckLoginStatus(!checkLoginStatus);
    history.push("/login");
  };
  return (
    <div className="login-content">
      <p>Name: {username}</p>
      <p>Status: <span>Online</span></p>
      <button onClick={outUser}>
        {!checkLoginStatus ? "Login" : "Sing out"}
      </button>
    </div>
  );
};

export default LoginContent;
