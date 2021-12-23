import React, { useState } from 'react'
import { Button } from './components/Button';
import Statistics from './Statistics';

const Unicafe = () => {
  // save clicks of each button to its own state
  //HOOKS
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  //VARIABLES

  //METODOS
  const setRating = (type,value) => {
    const rates = {
      good: setGood,
      neutral: setNeutral,
      bad: setBad
    }
    rates[type](value+1)
  }
  return (
    <div>
      <h2>Dar feedback</h2>
      <span>
        <Button state={[good, setGood]} label={'Bueno'}></Button>
      </span>
      <span>
      <Button state={[neutral, setNeutral]} label={'Regular'}></Button>
      </span>
      <span>
      <Button state={[bad, setBad]} label={'Malo'}></Button>
      </span>
      {good + neutral + bad > 0
       ?<Statistics stats={{good: good, neutral: neutral, bad: bad}}/>
       :<p>Aun no hay calificaciones</p>
      }
    </div>
  );
}

export default Unicafe