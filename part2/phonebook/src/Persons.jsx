function Persons({ filteredPersons, deletePerson }) {
  const deletePersonFromWindow = (person) => {
    const isConfirmed = window.confirm(`Are you sure to delete ${person.name}`);
    if (isConfirmed) {
      deletePerson(person.id);
    }
  };
  return (
    <div>
      {filteredPersons.map((person, index) => (
        <div key={person.name + index}>
          <span>{person.name}</span>
          <span>{person.number}</span>
          <button onClick={() => deletePersonFromWindow(person)}>
            {" "}
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Persons;
