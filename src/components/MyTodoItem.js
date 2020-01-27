import React, {Component} from 'react'

class MyTodoItem extends Component {
    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" 
                    checked={this.props.task.completed} 
                    onChange={() => this.props.handleCheckboxClick(this.props.task.id)}
                />
                <p>{this.props.task.name}</p>
            </div>
        )
    }
}

export default MyTodoItem