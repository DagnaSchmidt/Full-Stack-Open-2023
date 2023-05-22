import React, {useState} from 'react'
import Button from './components/Button';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [average, setAverage] = useState(0);

    const all = good + neutral + bad;
    const positive = (good / all) * 100;
    const averageProc = average / all;

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
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
        <p>average {all === 0 ? '0' : averageProc}</p>
        <p>positive {all === 0 ? '0' : positive} %</p>
      </div>
    )
}

export default App