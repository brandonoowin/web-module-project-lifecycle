import React from 'react'
import Form from './Form'
import axios from 'axios';


const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
   constructor() {
    super();
    this.state = {
      todos: [], 
      errors: '',
      todoNameInput: '', 
      completed: false, 
    }
  }
  toggleTodos = (id) => () => {
    axios.patch(`${URL}/${id}`)
    .then(res => {
      this.setState({...this.state, todos: this.state.todos.map(td => {
        if (td.id !== id) return td
        return res.data.data
      })})
    })
    .catch(this.responseError())
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.postNewTodo(); 
  }
  responseError = (err) => {
    const errMsg = err.response.data.message;
    this.setState({...this.state, errors: errMsg})
  }

  resetNewInput= () => {
    this.setState({ ...this.state, todoNameInput: ''})
  }

  postNewTodo = () => {
    axios.post(URL, { name: this.state.todoNameInput})
    .then(res => {
      this.setState({...this.state, todos: this.state.todos.concat(res.data.data)})
      this.resetNewInput();
    })
    .catch(this.responseError)
  }

  onChange = (evt) => {
    const { value } = evt.target
    this.setState({ ...this.state, todoNameInput: value})
  }

  fetchAllTodos = () => {
    axios.get(URL)
    .then(res => {
      const todoData = res.data.data;
      this.setState({ ...this.state, todos: todoData})
    })
    .catch(this.responseError)
  }


  componentDidMount() {
    this.fetchAllTodos()
  }

  

  render() {
    return (
      <div>
        <div style={{color: 'red'}}>{this.state.errors}</div>
        <h1>Todos:</h1>
        {
          this.state.todos.map(td => {
            return <div key={td.id} onClick={this.toggleTodos(td.id)}>{td.name} {td.completed ? ' - DONE' : '' }</div>
          })
        }
        <form onSubmit={this.onSubmit}>
          <input value={this.state.todoNameInput} type='text' placeholder='Type Todo' onChange={this.onChange}/>
          <input type='submit' />
          <button>Clear Completed</button>
          </form>
      </div>
    )
  }
}
