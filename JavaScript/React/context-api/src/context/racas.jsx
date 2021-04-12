import React from 'react'

// Usando contexto, nos simplesmente definimos qual será o ultimate source of truth, passamos para ele inicialmente um valor default
const valorPadrao = {
  racas: [],
  selecionaRaca: () => {}
}

//É aqui que criamos efetivamente o contexto
const RacasContext = React.createContext(valorPadrao)

export default RacasContext