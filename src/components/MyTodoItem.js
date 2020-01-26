import React from 'react'

class MyTodoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.props.task.completed}/>
                <p>{this.props.task.name}</p>
            </div>
        )
    }
}

export default MyTodoItem