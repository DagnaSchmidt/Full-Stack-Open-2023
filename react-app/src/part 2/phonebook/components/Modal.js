import React from 'react';

const Modal = ({message, type}) => {
    if(message === null){
        return null;
    }

  return (
    <div style={{padding: '12px', borderWidth: '6px', borderStyle: 'solid', borderColor: type === 'success' ? 'green' : 'red'}}>
        <h4>{type === 'success' ? 'Success!' : 'Error!'}</h4>
        <p>{message}</p>
    </div>
  )
}

export default Modal;