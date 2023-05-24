import React from 'react';
import { getAll, deleteNumber} from '../backend/actions';

const DeleteBtn = ({id, setPersons}) => {
    const handleOnClick = async (id) => {
        const data = await deleteNumber(id)
            .then(() => {
                getAll()
                    .then(response => setPersons(response));
            })
    }

  return (
    <button onClick={() => handleOnClick(id)}>delete</button>
  )
}

export default DeleteBtn;