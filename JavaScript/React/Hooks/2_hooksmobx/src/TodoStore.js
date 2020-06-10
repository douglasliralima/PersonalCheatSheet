// Isso é do próprio react e permite resgatarmos objetos em contexto diferentes
// passando sua classe
import { createContext } from 'react'
// Aqui estão as chaves que iremos informar o que é o observável e onde estaria a action, pelo
// decorete
import { decorate, observable, computed } from 'mobx'

//Criação da ca classe de forma padrão
export class Todos {
  todos = [
    { id: 1, text: 'Buy eggs', completed: true },
    { id: 2, text: 'Write a post', completed: false }
  ]

  get remainingTodos() {
    return this.todos.filter(t => !t.completed).length
  }

  toggleTodo = index => {
    this.todos[index].completed = !this.todos[index]
      .completed
  }
}

decorate(Todos, {
  todos: observable,
  remainingTodos: computed
})

export default createContext(new Todos())
