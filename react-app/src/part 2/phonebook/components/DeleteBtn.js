import React from 'react';
import { getAll, deleteNumber} from '../backend/actions';

const DeleteBtn = ({id, setPersons, setMessage, setType, name}) => {
    const handleOnClick = async (id) => {
        if(window.confirm('Do you want to delete this number?')){
            const data = await deleteNumber(id)
            .then(() => {
                getAll()
                    .then(response => setPersons(response));
            })
            .catch(error => {
                setMessage(`information about ${name} has been already deleted from server`);
                setType('error');
                setTimeout(() => {
                    setMessage(null);
                    setType(null);
                }, 5000);
            })
        }
    }

  return (
    <button onClick={() => handleOnClick(id)}>delete</button>
  )
}

export default DeleteBtn;