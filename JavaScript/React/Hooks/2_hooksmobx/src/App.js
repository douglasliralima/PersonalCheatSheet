import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import { observer, useObservable } from 'mobx-react-lite'
import TodoStore from './TodoStore'

import TodoList from './components/TodoList'
import Footer from './components/Footer'

export const App = observer(() => {
  // Para a criação do objeto que será observado usamos o useObservable
  // Apenas fazemos isso se for criar o store dentro da classe, mas vai contra as boas práticas
  // const store = useObservable({
  //   todos: [
  //     { id: 1, text: 'Buy eggs', completed: true },
  //     { id: 2, text: 'Write a post', completed: false }
  //   ],
  //   toggleTodo(index) {
  //     store.todos[index].completed = !store.todos[index].completed
  //   },
  //   get remainingTodos() {
  //     return store.todos.filter(todo => !todo.completed).length
  //   }
  // })
  const store = useContext(TodoStore)

  return (
    <div className="App">
      <h2>A Todo App yet again!</h2>
      <TodoList
        todos={store.todos}
        toggleTodo={store.toggleTodo}
      />
      <Footer
        remaining={store.remainingTodos}
        total={store.todos.length}
      />
    </div>
  )
})

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
