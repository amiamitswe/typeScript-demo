import { PersonProps } from "../types/person.type";

const Person = (props: PersonProps) => {
  return (
    <div>
      <h1>
        Name Is: {props.person.fName} {props.person.lName}
      </h1>
    </div>
  );
};

export default Person;
