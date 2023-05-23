import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [search, setSearch] = useState('');
  const searchedPersons = persons.filter((item) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  console.log(searchedPersons);

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
            {
                name: newName,
                phone: newPhone,
                id: persons.length + 1
        }
        ]);
    }else{
        alert(`${newName} is already added to phone book`);
    }
  }

  const handleChange = e => {
    const {value, name} = e.target;
    if(name === 'name'){
        setNewName(value);
    }else if(name === 'phone'){
        setNewPhone(value);
    }else{
        setSearch(value);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h2>Search</h2>
      <input type='text' name='search' value={search} onChange={handleChange} />
      <h2>Add new number</h2>
      <form onSubmit={handleSubmit}>
        <div>
            name: <input type='text' name='name' value={newName} onChange={handleChange} />
        </div>
        <div>
            phone: <input type='number' name='phone' value={newPhone} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        search.length > 0 ?
            searchedPersons.map((item) => <p key={item.name}>{item.name} {item.phone}</p>)
        :
            persons.map((item) => <p key={item.name}>{item.name} {item.phone}</p>)
      }
    </div>
  )
}

export default App;