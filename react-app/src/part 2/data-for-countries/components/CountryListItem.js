import React from 'react';

const CountryListItem = ({name, setSearch}) => {
  return (
    <div>
        <p>{name.common}</p>
        <button onClick={() => setSearch(name.common)}>display</button>
    </div>
  )
}

export default CountryListItem;