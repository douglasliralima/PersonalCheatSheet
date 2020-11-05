import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
    return () => {
        alert("Adeus!")
    }
    }, []);
    /**
     * Se você passar um array vazio ([]), a props e o state passados dentro do efeito sempre terão seus valores iniciais. 
     * E esse efeito só é acionado uma vez na construçao desse componente e em sua destruição
     */
 
  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}