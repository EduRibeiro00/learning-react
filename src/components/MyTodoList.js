import React from 'react';
import MyTodoItem from './MyTodoItem.js' 
import tasksList from '../data/tasksList.js'

function MyTodoList() {
  const allTasks = tasksList.map(
    function(item) {
      return (
        <MyTodoItem key={item.id} task={item} />
      )
    }
  )

  return (
    <div className="todo-list">
      {allTasks}
    </div>
  );
}

export default MyTodoList