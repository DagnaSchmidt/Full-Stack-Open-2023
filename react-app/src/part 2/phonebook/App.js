import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setPersons([
        ...persons,
        {name: newName}
    ]);
  }

  const handleChange = e => {
    const {value} = e.target;
    setNewName(value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type='text' value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((item) => <p key={item.name}>{item.name}</p>)}
    </div>
  )
}

export default App;