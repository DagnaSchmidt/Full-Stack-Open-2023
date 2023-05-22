import React, {useState} from 'react'
import Button from './components/Button';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleClick = (text) => {
        if(text === 'good'){
            setGood(good + 1);
        }else if(text === 'neutral'){
            setNeutral(neutral + 1);
        }else{
            setBad(bad + 1);
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
      </div>
    )
}

export default App