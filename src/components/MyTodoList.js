import React, { useState } from 'react'
import MyTodoItem from './MyTodoItem.js'
import tasksList from '../data/tasksList.js'

export default function MyTodoList() {
  const [tasks, setTasks] = useState(tasksList)

  const handleCheckboxClick = id => {
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

  const taskComponent = tasks.map(item => {
      return (
        <MyTodoItem 
          key={item.id} 
          task={item} 
          handleCheckboxClick={handleCheckboxClick}
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