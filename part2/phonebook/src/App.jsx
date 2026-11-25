import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import personServices from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => {
        const data = response.data;
        setPersons(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const updatePerson = () => {
    const nameObject = {
      name: newName,
      number: newNumber,
    };
    const isConfirmed = window.confirm(
      `${newName} is already added to phonebook, replace the old number with a new one?`
    );
    if (isConfirmed) {
      const id = persons.find((p) => p.name === newName)?.id;
      console.log("id", id);
      personServices
        .update(nameObject, id)
        .then((res) => {
          setPersons(persons.filter((p) => p.id !== id).concat(res));
          console.log(res);
          setNewName("");
          setNewNumber("");
          setFilter("");
        })
        .catch((err) => console.log(err));
    }
  };

  const addName = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      updatePerson();
      return;
    }
    const nameObject = {
      name: newName,
      number: newNumber,
    };
    personServices
      .create(nameObject)
      .then((res) => {
        setPersons(persons.concat(res.data));
        setNewName("");
        setNewNumber("");
        setFilter("");
      })

      .catch((err) => console.log(err));
  };

  const filteredPersons = persons.filter((person) =>
    person?.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        addName={addName}
      />
      <h2>Numbers</h2>
      <Persons
        filteredPersons={filteredPersons}
        deletePerson={personServices.deletePerson}
      />
    </div>
  );
};

export default App;
