const Statistic = ({stats})=>{
   const {good, neutral, bad} = stats
   const total = good+neutral+bad
   return(
      <div>
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
      <p>{good<1 ? 'Aun no hay reseñas positivas' : (good*100)/total+'%'}</p>
      </div>
   )
}

export default Statistic