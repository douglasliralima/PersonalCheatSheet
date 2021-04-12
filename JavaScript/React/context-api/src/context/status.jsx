import React from 'react'

// Usando contexto, nos simplesmente definimos qual será o valor da store, passamos para ele inicialmente um valor default
const valorPadrao = "Você ainda não selecionou nenhuma raça :("

//É aqui que criamos efetivamente o contexto
const statusContext = React.createContext(valorPadrao)

export default statusContext