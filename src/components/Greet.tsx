type GreetProps = {
  name: string;
  age?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { age = 24 } = props;
  return (
    <div>
      <h1>
        {props.isLoggedIn ? `Hello ${props.name} and age is ${age}` : "Welcome"}
      </h1>
    </div>
  );
};

export default Greet;
