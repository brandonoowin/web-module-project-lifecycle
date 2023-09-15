import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
          <form onSubmit={this.props.onSubmit}>
            <input 
            value={this.props.todoNameInput} 
            type='text' 
            placeholder='Type Todo' 
            onChange={this.props.onChange}/>
            <input type='submit' />
          </form>
          <button 
          onClick={this.props.toggleDisplayCompleted}
          >
            {this.props.displayCompleted ? ' Hide' : ' Show'} Completed
            </button>
      </div>
    )
  }
}
