import { PersonListProps } from "../types/personList.type";

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.personList.map((person) => (
        <h2 key={person.id}>
          {person.id}. {person.fName} {person.lName}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
