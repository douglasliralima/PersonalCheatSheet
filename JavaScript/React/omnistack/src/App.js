import React from 'react';
//Precisamos usar isso do react-router-dom para pegar a rota do navegador
import {BrowserRouter} from 'react-router-dom'
import Router from './router'
import Header from './components/Header'
/**
 * Isso é um componente, componentes são arquivos JS que retornam um cod isolado JSX
 * por meio de uma função ou classe.
 * Em um componente nos injetamos o código de estilização css, junto ao html
 * e a lógica js, um componente carrega todo um pedaço de uma página, por exemplo. */

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Router/>
    </BrowserRouter>  
  );
}

export default App;
