import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div 
        onClick={this.props.toggleTodos(this.props.todo.id)}
        >
        {this.props.todo.name} {this.props.todo.completed ? ' - DONE' : '' }
      </div>
    )
  }
}
