import React from 'react';

const Numbers = ({search, searchedPersons, persons}) => {
  return (
    <>
        {
            search.length > 0 ?
                searchedPersons.map((item) => <p key={item.id}>{item.name} {item.phone}</p>)
            :
                persons.map((item) => <p key={item.id}>{item.name} {item.phone}</p>)
        }
    </>
  )
}

export default Numbers;