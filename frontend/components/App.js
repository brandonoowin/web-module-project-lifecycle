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
    }
  }

  onSubmit = () => {

  }

  onChange = () => {

  }

  fetchAllTodos = () => {
    axios.get(URL)
    .then(res => {
      console.log(res.data.data);
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
        <Form />
      </div>
    )
  }
}
