import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

let id = 0
let getId = () => ++id

const initialTodos = [
  { id: getId(), name: "Walk the dog", complete: false },
  { id: getId(), name: "Write app", complete: true },
  { id: getId(), name: "Learn React", complete: false },
]

export default class App extends React.Component {
  state = {
    todos: initialTodos
  }

  addTodo = (name) => {
    this.state({
      ...this.state,
      todos: this.state.todos.concat({ id: getId(), complete: false, name })
    
    })
  }

  toggleCompletion = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    })
     
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion} />
        <Form addTodo={this.addTodo} />
      </div>
    )
  }
}
