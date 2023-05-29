import React from 'react';
import Person from './Person';

const Numbers = ({search, searchedPersons, persons, setPersons, setMessage, setType}) => {
  return (
    <>
        {
            search.length > 0 && searchedPersons.length !== 0 ?
                searchedPersons.map((item) => <Person key={item.id} name={item.name} phone={item.phone} id={item.id} setPersons={setPersons} setType={setType} setMessage={setMessage}/>)
            :
                persons.map((item) => <Person key={item.id} name={item.name} phone={item.phone} id={item.id} setPersons={setPersons} setType={setType} setMessage={setMessage}/>)
        }
    </>
  )
}

export default Numbers;