import React, { useState } from "react";

type UserType = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<null | UserType>(null);
  const loginHandler = () => {
    setUser({ name: "Amit", email: "amit@text.com" });
  };
  const logOutHandler = () => {
    setUser(null);
  };
  return (
    <div>
      <p>useState type with null and object</p>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logOutHandler}>Log Out</button>
      <p>User is {user?.name}</p>
      <p>User is {user?.email}</p>
    </div>
  );
};

export default User;
