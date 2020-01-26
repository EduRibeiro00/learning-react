import React, {Component} from 'react'
import './App.css'
import MyTodoList from './components/MyTodoList.js'
import GreetingsLine from './components/GreetingsLine.js'

import tasksList from './data/tasksList.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasksData : tasksList
    }
  }

  render() {
    return (
      <div className="main">
        <GreetingsLine />
        <MyTodoList tasks={this.state.tasksData}/>
      </div>
    )
  }
}


export default App
