import React from 'react'
import Form from './Form'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Form />
      </div>
    )
  }
}
