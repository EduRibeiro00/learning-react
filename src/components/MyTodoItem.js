import React from 'react'

export default function MyTodoItem({task, handleClick}) {
    return (
        <div className={task.completed ? "todo-item completed" : "todo-item"}>
            <input type="checkbox" 
                checked={task.completed} 
                onChange={() => handleClick(task.id)}
            />
            <p>{task.name}</p>
        </div>
    )
}
