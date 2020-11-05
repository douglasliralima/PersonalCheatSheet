import React, {useState, useEffect} from 'react';

//Hooks basicamente é o desenvolvimento voltado a funções de callback que possuem um jsx relacionado
function App() {
  //Aqui é a forma que criamos state, bem mais simples e "especializado"
  const [bullets, setBullets] = useState([]);

  // Vai ser executado antes de renderizar a página e apenas uma vez
  // basicamente um componentDidMount
  useEffect(() => {
    alert("Welcome to the simplest bullet system that you ever seen")
  }, [])

  // Esse é um componenDidUpdate, mas ele é focado no update de apenas uma variável
  useEffect(() => {
    console.log("Bullets alterado")
  }, [bullets])
  function HandleNewBullet(){
    setBullets([...bullets, {number : bullets.length+1, text : "New bullet"}]);
  }

  function handleBulletRemove(bulletNumber){
    const newBullets = bullets.filter(bullet => bullet.number !== bulletNumber);
    newBullets.map(bullet => {
      if(bullet.number > bulletNumber){
        bullet.number = bullet.number - 1;
      }
    });
    setBullets(newBullets);
  }

  return (
    <div className="App">
      {/* Passamos para os hooks endereços de funções e elas serão  */}
      <button onClick = {HandleNewBullet}>New Bullet</button>
      {bullets.map(bullet => <lu>
        <li>{
          bullet.number + " " + bullet.text + " "}
          {/* Para passar um endereço de função com uma variável anexada, usamos o arrowfunction */}
          <button onClick = {() => handleBulletRemove(bullet.number)}>Remover</button>
        </li>
      </lu>)}

    </div>
  );
}

export default App;
