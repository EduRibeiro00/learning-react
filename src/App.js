import React from 'react'
import './App.css'
import MyTodoList from './components/MyTodoList.js'
import GreetingsLine from './components/GreetingsLine.js'

export default function App() {
  return (
    <div className="main">
      <GreetingsLine />
      <MyTodoList />
    </div>
  )
}
