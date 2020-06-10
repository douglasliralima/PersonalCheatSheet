import React from 'react';
import { render } from 'react-dom';

let id = 0

//Podemos acessar o props de um componente sendo ele em uma função também
const Todo = props => (
  <li>
    <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle} />
    <button onClick={props.onDelete}>delete</button>
    <span>{props.todo.text}</span>
  </li>
)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  addTodo() {
    const text = prompt("TODO text please!")
    this.setState({
      // o render só vai acontecer se nos alteramos algum valor, o que significa que sempre precisamos
      // criar um novo array, para ter uma nova referência, mesmo que só alguma coisa tenha sido alterada
      // para passar todos os valores de um array, usamos o [...array]

      // logo aqui nos reclonamos todos os valores do array e então criamos um objeto com o novo valor
      todos: [
        ...this.state.todos,
        {id: id++, text: text, checked: false},
      ], 
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }

  render() {
    return (
      <div>
        <div>Todo count: {this.state.todos.length}</div>
        <div>Unchecked todo count: {this.state.todos.filter(todo => !todo.checked).length}</div>
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo
              // quando mandamos uma função de parametro, podemos inclusive falar qual o parametro dessa função
              // precisamos mandar fazendo o bind
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    )
  }
}


render(<App />, document.getElementById('root'));
