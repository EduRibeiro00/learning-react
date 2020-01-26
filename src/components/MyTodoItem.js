import React from 'react';

function MyTodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.task.completed}/>
            <p>{props.task.name}</p>
        </div>
    );
}

export default MyTodoItem;