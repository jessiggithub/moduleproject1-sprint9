import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  state = {
    showAll: true
  }

  toggleShowAll = evt => {
    this.setState({
      ...this.state,
      showAll: !this.state.showAll
    })
  } 

  render() {
    const { todos, toggleCompletion } = this.props
    const filtered = todos.filter(todo => this.state.showAll || !todo.completed)
    return (
      <div>
        {
        todos.map((todo) => (<Todo key={todo.id} todo={todo} toggleCompletion={toggleCompletion} />))
        }
        <button onClick={this.toggleShowAll}>{this.state.showAll ? 'Hide' : 'Show'}</button>
      </div>
    )
  }
}
