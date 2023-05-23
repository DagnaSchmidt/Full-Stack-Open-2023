import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import AddNumber from './components/AddNumber';
import Numbers from './components/Numbers';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [search, setSearch] = useState('');
  const searchedPersons = persons.filter((item) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
        .then(response => {
            setPersons(response.data);
        });
    }, []);

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
      <h3>Search</h3>
      <Search search={search} handleChange={handleChange} />
      <h3>Add new number</h3>
      <AddNumber handleSubmit={handleSubmit} handleChange={handleChange} newName={newName} newPhone={newPhone} />
      <h3>Numbers</h3>
      <Numbers search={search} searchedPersons={searchedPersons} persons={persons} />
    </div>
  )
}

export default App;