// Como o nosso reducer trabalha com strings, geralmente o melhor é forcener também uma constante com as ações que podem ser
// fornecedas para aquele reducer
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
  CHANGE_COUNT: 'change-count'
}


//O nosso reducer sempre terá um objeto ou atributo que referencia o nosso estado e esse objeto action que será um objeto
//que o usuário nos fornece ao qual geralmente modula as açẽos que iremos tomar

//Nossos reducers geralmente ficam fora do nosso componente
function reducer(count, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return count + 1
    case ACTIONS.DECREMENT:
      return count - 1
    case ACTIONS.RESET:
      return 0
    case ACTIONS.CHANGE_COUNT:
      return count + action.payload.amount //Temos geralmente os dados passados para o nosso reducer através desse campo payload
    default:
      return count
  }
}

function App() {


  // Similar ao useState, o useReducer também pega um valor inicial e nos retorna seu referencial junto de uma função para 
  // alterar esse valor, a diferença está que nos provemos para o useReducer uma função e essa que ditará como será feita a 
  // atualização de nosso estado

  //Toda vez que estamos fazendo a chamada dessa função de dispatch, em fato o que fazemos é a função do nosso reducer
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </>
  )
}

export default App;
