import React, {Component} from 'react'

class MyTodoItem extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.props.task.completed} />
                <p>{this.props.task.name}</p>
            </div>
        )
    }
}

export default MyTodoItem