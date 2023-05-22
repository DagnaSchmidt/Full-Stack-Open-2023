import React from 'react'
import Part from './Part'

const Content = ({parts}) => {
  return (
    <>  
        {parts.map((item) => {
            return (
                <Part
                    part={item}
                />
            )
        })}
    </>
  )
}

export default Content