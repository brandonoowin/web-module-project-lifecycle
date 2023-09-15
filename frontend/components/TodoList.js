import React from 'react'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
          <h1>Todos:</h1>
          {
            this.props.todos.reduce((acc , td) => {
              if (this.props.displayCompleted || !td.completed) return acc.concat(
                <div key={td.id} onClick={this.props.toggleTodos(td.id)}>{td.name} {td.completed ? ' - DONE' : '' }</div>
              )
              return acc
            }, [])
            //THIS MADE NO SENSE 
          }
      </div>
    )
    
  }
  
}
