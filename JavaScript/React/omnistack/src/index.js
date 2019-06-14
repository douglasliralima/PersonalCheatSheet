//Importação base do React, ela é usada em todo lugar, inclusive na dependência abaixo
import React from 'react';
//Aqui especificamos a plataforma react para navegador(DOM), temos vários outros
//ambientes de desenvolvimento e renderização, como mobile e até VR
import ReactDOM from 'react-dom';
//Nossa aplicação
import App from './App';
import './global.css'

//Aqui basicamente mandamos para a DOM o nosso componente de aplicação por meio de 
//uma tag JSX colocando dentro da div root
ReactDOM.render(<App />, document.getElementById('root'));