import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistic from './Statistics';

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
        <button onClick={ ()=>{setRating('good', good)}}>Bueno</button>
      </span>
      <span>
        <button onClick={ ()=>{setRating('neutral',neutral)}}>Medio</button>
      </span>
      <span>
        <button onClick={ ()=>{setRating('bad',bad)}}>Malo</button>
      </span>
      {good + neutral + bad > 0
       ?<Statistic stats={{good: good, neutral: neutral, bad: bad}}/>
       :<p>Aun no hay calificaciones</p>
      }
    </div>
  );
}

export default Unicafe