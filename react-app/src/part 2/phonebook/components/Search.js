import React from 'react';

const Search = ({search, handleChange}) => {
  return (
    <input type='text' name='search' value={search} onChange={handleChange} />
  )
}

export default Search;