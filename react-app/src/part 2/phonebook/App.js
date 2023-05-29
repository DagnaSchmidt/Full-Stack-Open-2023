import { useState, useEffect } from 'react';
import Search from './components/Search';
import AddNumber from './components/AddNumber';
import Numbers from './components/Numbers';
import Modal from './components/Modal';
import {getAll, addNew, deleteNumber} from './backend/actions';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState(null);
  const [type, setType] = useState();

  useEffect(() => {
    getAll()
        .then(response => setPersons(response));
    }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const newPerson = {
        name: newName,
        phone: newPhone
    }
    const check = () => {   
        for(let i = 0; i < persons.length; i++){
            if(newName === persons[i].name){
                if(window.confirm(`${newName} already exists in database. Replace old number with new one?`)){
                    deleteNumber(persons[i].id)
                    return true;
                }else{
                    return false;
                }
            }
        }
        return true;
    }
    const checked = check();
    if(checked === true){
        addNew(newPerson)
            .then(response => {
                setPersons(persons.concat(response));
                setMessage(`${newName} added`);
                setType('success');
                setTimeout(() => {
                    setMessage(null);
                    setType(null);
                }, 5000);
            })
            .catch(error => {
                console.log('post new phone number failed');
                setMessage('post new phone number failed');
                setType('error');
                setTimeout(() => {
                    setMessage(null);
                    setType(null);
                }, 5000);
            });
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
      <Modal message={message} type={type} />
      <h3>Search</h3>
      <Search search={search} handleChange={handleChange} />
      <h3>Add new number</h3>
      <AddNumber handleSubmit={handleSubmit} handleChange={handleChange} newName={newName} newPhone={newPhone} />
      <h3>Numbers</h3>
      <Numbers search={search} persons={persons} setPersons={setPersons} setType={setType} setMessage={setMessage} />
    </div>
  )
}

export default App;