import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);
  const [count, setCount] = useState(0);

  // Os Hooks são sensacionais porque conseguimos modular uma lógica unicamente em um efeito distinto e não quebra-lo em vários métodos
  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  });

  // que são chamados no ciclo de vida de um componente react willMount, mounted, update...
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    //ChatAPI não existe, só para exemplificar que esse efeito é aplicado após cada renderização
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // E especificado como limpar depois desse efeito:
    // Essa forma também é a maneira que utilizamos o unmount com hooks, só que ele vai unmountar a cada renderização
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }

  return isOnline ? (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  ) : 'Offline';
}