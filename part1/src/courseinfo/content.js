import Part from "./Part"


const Content = (props)=>{
  return(
    <>
      <Part name={props.part1.name} num={props.part1.exercises}/>
      <Part name={props.part2.name} num={props.part2.exercises}/>
      <Part name={props.part3.name} num={props.part3.exercises}/>
    </>
   )
}
export default Content