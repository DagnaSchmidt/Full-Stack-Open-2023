import React from 'react';
import DeleteBtn from './DeleteBtn';

const Person = ({id, name, phone, setPersons, setMessage, setType}) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
        <p key={id}>{name} {phone}</p>
        <DeleteBtn id={id} setPersons={setPersons} setMessage={setMessage} setType={setType} name={name}/>
    </div>
  )
}

export default Person;