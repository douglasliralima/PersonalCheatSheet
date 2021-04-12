import React from 'react';
import ReactDOM from 'react-dom';
import App from './BasicFuncClassComponent';

// No react criamos componentes, esses componentes são pedaços de página, com uma lógica javascript e um "HTML" diferenciado, que aqui
// chamamos de jsx, ao qual pode ser criado por duas formas
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);