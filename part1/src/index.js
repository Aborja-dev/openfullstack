import React from 'react'
import ReactDOM from 'react-dom'
//Components
import Header from './courseinfo/header'
import Content from './courseinfo/content'
import Total from './courseinfo/total'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  
  return (
    <div>
      <h1>Informacion del curso</h1>
      <Header course={course}/>
      <Content content={parts}/>
      <Total values={[parts[0].exercises, parts[1].exercises, parts[2].exercises]}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
