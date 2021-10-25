import React from 'react'
import ReactDOM from 'react-dom'
//Components
import Header from './courseinfo/header'
import Content from './courseinfo/content'
import Total from './courseinfo/total'

const App = () => {
  const data = {
    course:  'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  }
  
  return (
    <div>
      <h1>Informacion del curso</h1>
      <Header course={data.course}/>
      <Content content={data.parts}/>
      <Total values={[data.parts[0].exercises, data.parts[1].exercises, data.parts[2].exercises]}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
