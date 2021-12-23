import { Statistic } from "./components/Statistic"

const Statistics = ({stats})=>{
   const {good, neutral, bad} = stats
   const total = good+neutral+bad

   const data = [
     {
       label: 'Bueno',
       stat: good,
      },
      {
        label: 'Neutral',
        stat: neutral,
       },
       {
        label: 'Malo',
        stat: bad,
       },
       {
        label: 'Total',
        stat: total,
       },
   ]
   return(
      <div>
         <h2>Estadisticas</h2>
         <table>
           <tbody>
           { data.map( item=>
            <Statistic label={item.label} value={item.stat}></Statistic>)
          }
           </tbody>    
         </table>
      <p>
        Promedio <span>{(total)/3}</span>
      </p>
      <p>Porcentaje de reseñas positivas</p>
      <p>{good<1 ? 'Aun no hay reseñas positivas' : (good*100)/total+'%'}</p>
      </div>
   )
}

export default Statistics