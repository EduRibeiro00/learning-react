import React from 'react'

export default function MyTodoItem(props) {
    return (
            <div className={props.task.completed ? "todo-item completed" : "todo-item"}>
                <input type="checkbox" 
                    checked={props.task.completed} 
                    onChange={() => props.handleCheckboxClick(props.task.id)}
                />
                <p>{props.task.name}</p>
            </div>
    )
}
