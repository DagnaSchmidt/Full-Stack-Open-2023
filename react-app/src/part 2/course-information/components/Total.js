import React from 'react';

const Total = ({parts}) => {
  const total = parts.map((item) => item.exercises)
  let amount = 0;
  // for(let i = 0; i < total.length; i++){
  //   amount = (amount + total[i]);
  // }
  const result = total.reduce(
    (a, c) => a + c,
    amount
  );

    return (
      <p>total of {result} exercises</p>
    )
  }

export default Total;