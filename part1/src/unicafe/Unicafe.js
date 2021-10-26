import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Unicafe = () => {
  // save clicks of each button to its own state
  //HOOKS
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  //VARIABLES
  const total = good+neutral+bad
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
      <h2>Estadisticas</h2>
      <p>
        Bueno <span>{good}</span>
      </p>
      <p>
        Medio <span>{neutral}</span>
      </p>
      <p>
        Malo <span>{bad}</span>
      </p>
      <p>
        Total <span>{total}</span>
      </p>
      <p>
        Promedio <span>{(total)/3}</span>
      </p>
      <p>Porcentaje de reseñas positivas</p>
      <p>{good<1 ? 'Aun no hay reseñas positivas' : (good*100)/total}%</p>
    </div>
  );
}

export default Unicafe