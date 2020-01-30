import React from 'react'

export default function MyTodoItem({task, handleClick}) {
    return (
        <div 
            className={task.completed ? "todo-item completed" : "todo-item"}
            onClick={() => handleClick(task.id)}
        >
            <input type="checkbox" 
                checked={task.completed}
            />
            <p>{task.name}</p>
        </div>
    )
}
