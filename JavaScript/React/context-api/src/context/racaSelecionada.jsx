import React from 'react'

// Usando contexto, nos simplesmente definimos qual será o valor da store, passamos para ele inicialmente um valor default
const valorPadrao = {}

//É aqui que criamos efetivamente o contexto
const racaSelecionadaContext = React.createContext(valorPadrao)

export default racaSelecionadaContext