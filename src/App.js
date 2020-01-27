import React, {Component} from 'react'
import './App.css'
import MyTodoList from './components/MyTodoList.js'
import GreetingsLine from './components/GreetingsLine.js'

class App extends Component {
  render() {
    return (
      <div className="main">
        <GreetingsLine />
        <MyTodoList />
      </div>
    )
  }
}


export default App
