import Part from "./Part"


const Content = (props)=>{
  return(
    <>
      <Part name={props.content.part1} num={props.content.exercises1}/>
      <Part name={props.content.part2} num={props.content.exercises2}/>
      <Part name={props.content.part3} num={props.content.exercises3}/>
    </>
   )
}
export default Content