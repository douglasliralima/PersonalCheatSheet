import React from "react"

class Hello extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            comment: "",
            counter: 0
        }
    }

    //Método chamado antes da primeira renderização de uma classe
    componentWillMount() {
        //Nunca podemos modificar o state diretamente
        // Errado
        //this.state.comment = 'Hello';

        // Correto
        this.setState({ comment: 'Hello' });
        //Veja também que o setState mergeia os objetos, no caso sobrescreve o valor de comment aqui, mas counter permanece intacto

        /**
         * Como this.props e this.state podem ser atualizados de forma assíncrona, você não deve confiar em seus valores para calcular o 
         * próximo state, mas podemos definir uma função ao setState com dois parametros para o setState e nisso ele faz o biding do 
         * state anterior como o primeiro argumento e as props no momento em que a atualização for aplicada como o segundo 
         */
        // Errado
        //this.setState({
        //counter: this.state.counter + this.props.increment,
        //});

        // Correto
        this.setState((state, props) => ({
            counter: state.counter + props.increment
        }));
    }

    render(){
        return (<>
            <h1>{this.state.comment}</h1>
            <h1>{this.state.counter}</h1>
        </>);
    }
}

export default Hello;