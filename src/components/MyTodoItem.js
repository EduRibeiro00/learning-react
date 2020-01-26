import React from 'react';

function MyTodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{props.taskName}</p>
        </div>
    );
}

export default MyTodoItem;