import React, {useState} from 'react'
import Button from './components/Button';
import Statistic from './components/Statistic';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [average, setAverage] = useState(0);

    const handleClick = (text) => {
        if(text === 'good'){
            setGood(good + 1);
            setAverage(average + 1);
        }else if(text === 'neutral'){
            setNeutral(neutral + 1);
        }else{
            setBad(bad + 1);
            setAverage(average -1);
        }
    }
  
    return (
      <div>
        <h1>give feedback</h1>
        <Button text='good' handleClick={() => handleClick('good')} />
        <Button text='neutral' handleClick={() => handleClick('neutral')} />
        <Button text='bad' handleClick={() => handleClick('bad')} />
        {good === 0 && bad === 0 && neutral === 0 ?
            <p>No feedback given</p>
        :
            <Statistic good={good} bad={bad} neutral={neutral} average={average} />
        }
      </div>
    )
}

export default App