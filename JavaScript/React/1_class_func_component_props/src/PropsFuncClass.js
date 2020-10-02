import React from 'react';
import PropTypes from 'prop-types';

//Todos os componentes no react podem receber propriedades ao serem chamados por outros componentes, essas propriedades são como as
//variáveis deles, podemos ver abaixo, ambos são iguais

//Uma regra entretanto da utilização de props é que nunca podemos altera-los

function Welcome1(props) {
    return <h1>Hello, {props.name}</h1>;
}

class Welcome2 extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

//Podemos definir as propriedades que um componente aceita simplesmente assim:
Welcome1.propTypes = {
    name: PropTypes.string.isRequired
};

export default Welcome1;