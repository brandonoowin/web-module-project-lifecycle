import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
          <h1>Todos:</h1>
          {
            this.props.todos.reduce((acc , td) => {
              if (this.props.displayCompleted || !td.completed) return acc.concat(
                <Todo 
                toggleTodos={this.props.toggleTodos}
                todo={td}
                key={td.id} 
                />
              )
              return acc
            }, [])
            //THIS MADE NO SENSE 
          }
      </div>
    )
    
  }
  
}
