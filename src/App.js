import React from 'react'
import './App.css'
import MyTodoList from './components/MyTodoList.js'
import GreetingsLine from './components/GreetingsLine.js'

import tasksList from './data/tasksList.js'

class App extends React.Component {
    render() {
      return (
        <div className="main">
          <GreetingsLine />
          <MyTodoList tasks={tasksList}/>
        </div>
      )
    }
}


export default App
