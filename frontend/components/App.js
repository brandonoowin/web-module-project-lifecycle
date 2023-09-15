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
    }
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.postNewTodo(); 
  }

  postNewTodo = () => {
    axios.post(URL, { name: this.state.todoNameInput})
    .then(res => {
      this.fetchAllTodos();
      this.setState({ ...this.state, todoNameInput: ''})
    })
    .catch(err => {
      const errMsg = err.response.data.message;
      this.setState({...this.state, errors: errMsg})
    })
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
    .catch(err => {
      const errMsg = err.response.data.message;
      this.setState({...this.state, errors: errMsg})
    })
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
            return <div key={td.id}>{td.name}</div>
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
