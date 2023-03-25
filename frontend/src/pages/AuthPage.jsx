import React from "react";
import { AuthModule } from "../modules/AuthModule/index.js";

const AuthPage = ({ type }) => {
  return (
    <main className="flex-center">
      <AuthModule type={ type } />
    </main>
  );
};

export default AuthPage;
