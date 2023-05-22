import React from 'react';

const Statistic = ({good, bad, neutral, average}) => {
    const all = good + neutral + bad;
    const positive = (good / all) * 100;
    const averageProc = average / all;

  return (
    <>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
        <p>average {all === 0 ? '0' : averageProc}</p>
        <p>positive {all === 0 ? '0' : positive} %</p>
    </>
  )
}

export default Statistic;