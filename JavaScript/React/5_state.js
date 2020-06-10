import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    // outro jeito de fazer o binding e acho que o meu favorito
    // this.increaseCount = this.increaseCount.bind(this)
  }

  increaseCount() {
    // O this.setState funciona de forma assynchrona, em batch e faz um merge nesse batch caso 
    // a gente tenha feito alterações no mesmo objeto em outros pontos.
    // Aqui fazemos o merge {count : 0}, {count: this.state.count + 1}, {count: this.state.count + 1},
    // o que fica como operação final do batch {count : 0}, {count: this.state.count + 1}, pois vai 
    // da esquerda para a direita e no final só temos {count : 1}, mesmo chamando duas vezes
    // this.setState(({count: this.state.count + 1}))
    // this.setState(({count: this.state.count + 1}))

    // Podemos usar um updater forçado para fazer com que as coisas parecem de forma synchrona, mas continua em batch
    // mas o que ele fará é ver o estado anterior de state para fazer essa operação ocorrer duas vezes
    this.setState(prevState => ({count: prevState.count + 1}))
    this.setState(prevState => ({count: prevState.count + 1}))
    console.log(this.state.count)
  }

  render() {
    return (
      <div style={styles}>
        <div>
          {/* Uma coisa importante aqui é que precisamos fazer sempre o binding de funções nossas */}
          <button onClick={() => this.increaseCount()}>Increase</button>
        </div>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
