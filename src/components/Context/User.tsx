import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);
  const loginHandler = () => {
    if (userContext) {
      userContext.setUser({
        name: "Amit",
        email: "amit@test.com",
      });
    }
  };
  const logOutHandler = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };

  return (
    <div>
      <p>context prover consumer type ts</p>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logOutHandler}>Log Out</button>
      <p>User is {userContext?.user?.name}</p>
      <p>User is {userContext?.user?.email}</p>
    </div>
  );
};

export { User };
