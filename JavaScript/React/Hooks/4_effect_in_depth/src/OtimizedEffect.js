import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
    }, [count]); // Apenas re-execute o efeito quando o count mudar
    //Isso é bastante útil para não deixarmos o processamento de muitos effects custosos, pois eles só serão aplicando em um re render, se
    //essa variável tiver mudado

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}