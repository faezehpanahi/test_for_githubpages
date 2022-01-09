import React from "react";
import Person from "./Person";

const Persons = ({ persons, deleteHandlerPerson, changeHandlerPerson }) => {
  return (
    <div>
      {persons.map((person) => (
        <Person
          key={person.id}
          fullName={person.full_name}
          deleted={() => deleteHandlerPerson(person.id)}
          changed={(event) => changeHandlerPerson(event, person.id)}
        />
      ))}
    </div>
  );
};

export default Persons;
