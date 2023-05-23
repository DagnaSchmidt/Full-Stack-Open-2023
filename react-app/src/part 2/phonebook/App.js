import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]); 
  const [newName, setNewName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const check = () => {
        for(let i = 0; i < persons.length; i++){
            if(newName === persons[i].name){
                return false;
            }
        }
        return true;
    }
    const checked = check();
    if(checked === true){
        setPersons([
            ...persons,
            {name: newName}
        ]);
    }else{
        alert(`${newName} is already added to phone book`);
    }
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