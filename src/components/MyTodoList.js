import React, { useState } from 'react'
import MyTodoItem from './MyTodoItem.js'
import tasksList from '../data/tasksList.js'

function handleCheckboxClick(setTasks, id) {
  setTasks(prevTasks => {
    const newTasksList = prevTasks.map(taskItem => {
      if (taskItem.id === id) {
        return {
          ...taskItem,
          completed : !taskItem.completed
        }
      }
      return taskItem
    })
    
    return newTasksList
  })
}

export default function MyTodoList() {
  const [tasks, setTasks] = useState(tasksList)

  const taskComponent = tasks.map(item => {
      return (
        <MyTodoItem 
          key={item.id} 
          task={item} 
          handleCheckboxClick={handleCheckboxClick.bind(this, setTasks)}
        />
      )
    }
  )

  return (
    <div className="todo-list">
      {taskComponent}
    </div>
  )
}