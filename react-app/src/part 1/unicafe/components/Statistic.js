import React from 'react';
import StatisticLine from './StatisticLine';

const Statistic = ({good, bad, neutral, average}) => {
    const all = good + neutral + bad;
    const positive = (good / all) * 100;
    const averageProc = average / all;

  return (
    <>  
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={good + neutral + bad} />
        <StatisticLine text='average' value={all === 0 ? '0' : averageProc} />
        <StatisticLine text='positive' value={`${all === 0 ? '0' : positive} %`} />
    </>
  )
}

export default Statistic;