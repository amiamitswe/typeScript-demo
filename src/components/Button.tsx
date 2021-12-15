import React from "react";
import { ButtonEvent } from "../types/common.types";

type ButtonProps = {
  handleClick: () => void;
};

type Button2Props = {
  count: number;
  handleClick: (cn: number) => void;
};

type Button3Props = {
  handleClick: (event: ButtonEvent, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button type="button" onClick={props.handleClick}>
      Button Click
    </button>
  );
};

const Button2 = (props: Button2Props) => {
  return (
    <div>
      <p>Count : {props.count}</p>
      <button type="button" onClick={() => props.handleClick(2)}>
        Click Me with Data
      </button>
    </div>
  );
};

const Button3 = (props: Button3Props) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <button type="button" onClick={(event) => props.handleClick(event, 1)}>
        Button Click Event
      </button>
    </div>
  );
};

export { Button, Button2, Button3 };
