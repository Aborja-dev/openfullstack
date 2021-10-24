import React from 'react'
import ReactDOM from 'react-dom'
//Components
import Header from './courseinfo/header'
import Content from './courseinfo/content'
import Total from './courseinfo/total'

const App = () => {
  return (
    <div>
      <h1>Informacion del curso</h1>
      <Header/>
      <Content/>
      <Total/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
