import React from "react";

import UserLoginForm from "./forms/UserLoginForm.jsx";
import UserRegisterForm from "./forms/UserRegisterForm.jsx";

const AuthModule = ({ type }) => {
  return (
    <section className="auth">
      { type === "userLogin" && <UserLoginForm /> }
      { type === "userRegister" && <UserRegisterForm /> }
      { !type && <h1>404</h1> }
    </section>
  );
};

export default AuthModule;
