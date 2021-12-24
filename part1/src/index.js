import React from 'react'
import ReactDOM from 'react-dom'
//Components
import Header from './courseinfo/header'
import Content from './courseinfo/content'
import Total from './courseinfo/total'
import Unicafe from './unicafe/Unicafe'
import { Anecdotas } from './anecdotas/anecdotas'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

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
      <h1>Unicafe</h1>
      <Unicafe/>
      <Anecdotas anecdotes={anecdotes}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
