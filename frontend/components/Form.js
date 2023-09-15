import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <input type='text' placeholder='Type Todo'/>
        <input type='submit'/>
      </div>
    )
  }
}
