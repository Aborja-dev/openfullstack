const Total = ({values})=>{
   const exercises1 = values[0]
   const exercises2 = values[1]
   const exercises3 = values[2]   
   return(
      <>
         <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </>
   )
}
export default Total