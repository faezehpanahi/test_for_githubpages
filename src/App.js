import React, { useState, Fragment } from "react";
import Persons from "./components/Person/Persons";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import NewPerson from "./components/Person/NewPerson";

const App = () => {
  const [getPersons, setPersons] = useState([]);
  const [getSinglePerson, setSinglePerson] = useState("");
  const [getShowPersons, setShowPersons] = useState(true);

  const showHandlePersons = () => {
    setShowPersons(!getShowPersons);
  };

  const deleteHandlerPerson = (id) => {
    const objPerson = [...getPersons];
    const filterPerson = objPerson.filter((p) => p.id !== id);
    setPersons(filterPerson);

    const personIndex = objPerson.findIndex((p) => p.id === id);
    const person = objPerson[personIndex];

    toast.error(`${person.full_name} با موفقیت حذف شد.`, {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      closeButton: true,
      theme: "dark",
    });
  };

  const changeHandlerPerson = (event, id) => {
    const allPersons = getPersons;
    const personIndex = allPersons.findIndex((p) => p.id === id);
    const person = allPersons[personIndex];
    person.full_name = event.target.value;
    const persons = [...allPersons];
    persons[personIndex] = person;
    setPersons(persons);
  };

  const addHandlePerson = () => {
    const persons = [...getPersons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      full_name: getSinglePerson,
    };
    if (person.full_name !== "" && person.full_name !== " ") {
      persons.push(person);
      setPersons(persons);
      setSinglePerson("");
      //toast
      toast.success("شخص با موفقیت وارد شد.", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        closeButton: true,
      });
    }
  };

  const setPerson = (event) => {
    setSinglePerson(event.target.value);
  };

  let person = null;

  if (getShowPersons) {
    person = (
      <Persons
        persons={getPersons}
        deleteHandlerPerson={deleteHandlerPerson}
        changeHandlerPerson={changeHandlerPerson}
      />
    );
  }

  return (
    <Fragment>
      <div className="rtl text-center">
        <Header appTitle="مدیریت کننده اشخاص" persons={getPersons} />
        <NewPerson
          setPerson={setPerson}
          person={getSinglePerson}
          addHandlePerson={addHandlePerson}
        />
        <Button
          onClick={showHandlePersons}
          variant={getShowPersons ? "success" : "danger"}
        >
          نمایش اشخاص
        </Button>
        {person}
        <ToastContainer />
      </div>
    </Fragment>
  );
};

export default App;
