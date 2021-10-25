import React from 'react'
import ReactDOM from 'react-dom'
//Components
import Header from './courseinfo/header'
import Content from './courseinfo/content'
import Total from './courseinfo/total'

const App = () => {
  const course = 'Half Stack application development'
  const content = {
    part1: 'Fundamentals of React',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14,
  }

  return (
    <div>
      <h1>Informacion del curso</h1>
      <Header course={course}/>
      <Content content={content}/>
      <Total values={[content.exercises1, content.exercises2, content.exercises3]}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
