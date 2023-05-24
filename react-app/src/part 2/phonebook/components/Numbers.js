import React from 'react';
import Person from './Person';

const Numbers = ({search, searchedPersons, persons, setPersons}) => {
  return (
    <>
        {
            search.length > 0 ?
                searchedPersons.map((item) => <Person key={item.id} name={item.name} phone={item.phone} id={item.id} setPersons={setPersons}/>)
            :
                persons.map((item) => <Person key={item.id} name={item.name} phone={item.phone} id={item.id} setPersons={setPersons}/>)
        }
    </>
  )
}

export default Numbers;