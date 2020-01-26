import React from 'react'
import MyTodoItem from './MyTodoItem.js'

class MyTodoList extends React.Component {
    render() {
      const taskComponent = this.props.tasks.map(
        function(item) {
          return (
            <MyTodoItem key={item.id} task={item} />
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