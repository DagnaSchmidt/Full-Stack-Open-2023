import React from 'react'

const AddNumber = ({handleSubmit, newName, newPhone, handleChange}) => {
  return (
    <form onSubmit={handleSubmit}>
        <div>
            name: <input type='text' name='name' value={newName} onChange={handleChange} />
        </div>
        <div>
            phone: <input name='phone' value={newPhone} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default AddNumber