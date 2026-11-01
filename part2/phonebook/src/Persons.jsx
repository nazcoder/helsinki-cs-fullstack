function Persons({ filteredPersons }) {
  return (
    <div>
      {filteredPersons.map((person, index) => (
        <div key={person.name + index}>
          <span>{person.name}</span> <span>{person.number}</span>
        </div>
      ))}
    </div>
  );
}

export default Persons;
