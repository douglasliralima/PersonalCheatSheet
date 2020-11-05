import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  // Similar ao componentDidMount e componentDidUpdate, só que esse vai acontecer sempre depois de alguma nova renderização
  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    // como o useEffect está sendo usado no mesmo escopo dessa função, ele tem acesso ao count
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}