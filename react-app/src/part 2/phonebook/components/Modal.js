import React from 'react';

const Modal = ({message}) => {
    if(message === null){
        return null;
    }

  return (
    <div>
        <h4>Success!</h4>
        <p>{message}</p>
    </div>
  )
}

export default Modal;