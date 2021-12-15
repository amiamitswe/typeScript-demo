import React, { useState } from "react";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  const logOutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logOutHandler}>Log Out</button>
      <p>User is {isLoggedIn ? "Logged In" : "Logged Out"}</p>
    </div>
  );
};

export default Login;
