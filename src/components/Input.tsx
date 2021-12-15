import React from "react";
import { InputEvent } from "../types/common.types";

type InputProps = {
  value: string;
  ohChangeHandler: (event: InputEvent) => void;
};

const Input = (props: InputProps) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <input type="text" onChange={props.ohChangeHandler} value={props.value} />
    </div>
  );
};

export default Input;
