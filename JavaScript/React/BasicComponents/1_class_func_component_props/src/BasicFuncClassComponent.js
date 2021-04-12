import React from 'react';
import Welcome from "./PropsFuncClass"
// A primeira forma de criar um componente é por uma função, essa que precisa retornar um jsx, ela parece ser a mais simples, mas é a principal
// abordagem para quando estamos trabalhando com hooks
function App1() {
  return (
    <div className="App">
      <h1>Esse é uma tag qualquer</h1>
      <Welcome name="usuario"/>
    </div>
  );
}

// A segunda forma de criar um componente é por uma classe, essa que permite um controle melhor de como a tela será construida e uma
// estrutura bem mais próxima de objetos também

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Esse é uma tag qualquer</h1>
        <Welcome name="usuario"/>  
      </div>
    );
  }
}

export default App;
