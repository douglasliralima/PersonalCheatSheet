import React from 'react';

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

/**
 * No React, ao criarmos classe, podemos ter o que é chamado de estado local, esse estado local é medido por variáveis que, ao serem alteradas
 * ocasiona na nova renderização daquele componente
 */
class Clock extends React.Component {
  /**
   * O state, só pode ser utilizado em classes, a menos que estajamos usando hooks no React
   */
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  /**
   * Queremos configurar um temporizador sempre que o Clock é renderizado para o DOM pela primeira vez. Isso é chamado de 
   * “mounting” no React, que é justamente o que esse método vai fazer, após renderizarmos, ele é chamado
   */
  componentDidMount() {
    //Vamos guardar o resultado do callback do setInterval, caso tenhamos que interrompe-lo
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  /**
   * Nós também queremos limpar o temporizador sempre que o DOM produzido pelo Clock for removido. Isso é chamado de 
   * “unmounting” no React.
   */
  componentWillUnmount() {
    //Aqui, se o componente for desmontado, podemos parar a contagem, por isso passamos o callback para para-la
    clearInterval(this.timerID);
  }

  /**
   * Esse componente será chamado a segundo-a-segundo por essa classe, ele atualiza o state, pelo método setState o que força a nova
   * renderização da tela
   */
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        {/* O state é geralmente chamado de local ou encapsulado, pois não é acessível a nenhum componente que não seja o que o possui e 
        define, por exemplo o formattedDate abaixo, não tem como ele saber se o date fornecido veio de um state, props ou variável simples*/}
        <FormattedDate date={this.state.date} />
        {/* Outra coisa que podemos observar disso é que os dados sempre vão fluindo para baixo, Se você imaginar uma árvore de 
        componentes como uma cascata de props, o state de cada componente é como uma fonte de água adicional que o une em um ponto 
        arbitrário, mas também flui para baixo. */}
      </div>
    );
  }
}

export default Clock;
