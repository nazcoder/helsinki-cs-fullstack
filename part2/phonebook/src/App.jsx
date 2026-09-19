import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addName = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const nameObject = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(nameObject));
    setNewName("");
    setNewNumber("");
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <span>filter shown with</span>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter names"
      />
      <form onSubmit={addName}>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person, index) => (
        <div key={person.name + index}>
          <span>{person.name}</span> <span>{person.number}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
