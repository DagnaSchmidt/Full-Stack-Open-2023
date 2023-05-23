import React from 'react';
import Part from './Part';

const Content = ({parts}) => {
    return (
      <>  
          {parts.map((item) => {
              return (
                  <Part
                        key={item.id}
                        part={item}
                  />
              )
          })}
      </>
    )
  }

export default Content;