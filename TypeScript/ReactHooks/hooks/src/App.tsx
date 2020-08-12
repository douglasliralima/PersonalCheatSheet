//Parei em 20 minutos de vídeo, preciso entender mais sobre os hooks '-'
import React, 
      {useState,
      useEffect, //Não sofre nenhuma mudança com o uso dos typescript
      useMemo, //Typescript muito geralmente consegue inferir o tipo de retorno
      useCallback, //Typescript muito geralmente consegue inferir o tipo de retorno
    } from 'react';

interface User{
  name: string;
  login: string;
  avatar_url: string;
}

const App : React.FC = () => {
  //O State é simples, a única coisa que precisamos fazer é definir o tipo dele, ele faz a atualizaçãp
  //da variável, descontruindo uma variável que corresponde ao que foi tipada e sua função de set
  //Eu deixei ele com uma settagem básica para o setUsers funcionar de forma naive
  const [users, setUsers] = useState<User[] | []>([]);

  async function loadData() {
    const response = await fetch('https://api.github.com/users/douglasliralima');
    const data : User = await response.json();
    setUsers(prevState => ([...prevState, data]));
  }

  //useMemo é um hook que permite memoriazar o resultado de alguma função, dado algum parametro
  //essa memorização permite que não reexecutemos uma função custosa, desde que tenha sido processada
  //anterioremente
  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users]);
  
  
  return (
    <div className="App">
      {/* Esse ponto de interrogação é uma forma de só renderizar, quando não retorna undefined, é semelhante a
      {user && user.name} 
      <p>{user?.name}</p>*/}
      <p></p>
    </div>
  );
}

export default App;
