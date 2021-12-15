import { useState } from "react";
import "./App.css";
import { Button, Button2, Button3 } from "./components/Button";
import Container from "./components/Container";
import Box from "./components/Context/Box";
import { ThemeContextProvider } from "./components/Context/ThemeContext";
import { UserContextProvider } from "./components/Context/UserContext";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Counter from "./components/State/Counter";
import Login from "./components/State/Login";
import UserState from "./components/State/User";
import { User } from "./components/Context/User";
import Status from "./components/Status";
import { ButtonEvent, InputEvent } from "./types/common.types";

function App() {
  const [count, setCount] = useState<number>(0);
  const [inputText, setInputText] = useState<string>("");

  const personName = {
    fName: "Jone",
    lName: "Due",
  };

  const personList = [
    { id: "1", fName: "Jone", lName: "Due" },
    { id: "2", fName: "Jone 2", lName: "Due 2" },
    { id: "3", fName: "Jone 3", lName: "Due 3" },
  ];

  const clickHandler = () => {
    console.log("Button Clicked");
  };

  const countHandler = (data: number) => {
    const preCount = count;
    setCount(preCount + data);
  };

  const clickHandler3 = (event: ButtonEvent, id: number) => {
    console.log(event);
    console.log(id);
  };

  const onChangeHandler = (event: InputEvent) => {
    setInputText(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <Greet name="world" age={25} isLoggedIn={true} />
      <Person person={personName} />
      <PersonList personList={personList} />
      <Status status="success" />

      <Heading>Place holder text</Heading>

      <Oscar>
        <Heading>This is nested component example</Heading>
      </Oscar>

      <Button handleClick={clickHandler} />
      <Button2 count={count} handleClick={countHandler} />
      <Button3 handleClick={clickHandler3} />
      <Input value={inputText} ohChangeHandler={onChangeHandler} />

      <Container
        text="This is prop types for css property by react"
        style={{ border: "1px solid green", padding: "1rem", margin: "1rem" }}
      />

      <Login />
      <UserState />

      <Counter />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
