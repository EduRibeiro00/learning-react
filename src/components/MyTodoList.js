import React, {Component} from 'react'
import MyTodoItem from './MyTodoItem.js'
import tasksList from '../data/tasksList.js'

class MyTodoList extends Component {
  constructor() {
    super()
    this.state = {
      tasksList : tasksList
    }
  }


  handleCheckboxClick = (id) => {
    this.setState(prevState => {
      const newTasksList = prevState.tasksList.map(taskItem => {
        if (taskItem.id === id) {
          return {
            ...taskItem,
            completed : !taskItem.completed
          }
        }
        return taskItem
      })
      
      return {
        tasksList : newTasksList
      }
    })
  }


  render = () => {
    const taskComponent = this.state.tasksList.map(item => {
        return (
          <MyTodoItem 
            key={item.id} 
            task={item} 
            handleCheckboxClick={this.handleCheckboxClick}
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
}

export default MyTodoList