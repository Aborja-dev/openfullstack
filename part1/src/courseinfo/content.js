import Part from "./Part"


const Content = (props)=>{
  return(
    <>
      <Part name={props.content[0].name} num={props.content[0].exercises}/>
      <Part name={props.content[1].name} num={props.content[1].exercises}/>
      <Part name={props.content[2].name} num={props.content[2].exercises}/>
    </>
   )
}
export default Content