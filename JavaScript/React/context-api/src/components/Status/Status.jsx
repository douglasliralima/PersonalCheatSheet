import React from 'react'
import './styles.scss'
import StatusContext from '../../context/status'

const Status = () => (
  // O uso de um contexto é um pouco difernete também, definimos ele como um componente, componente esse que tem como filho uma 
  // função que recebe o valor que foi definido naquele contexto
  <StatusContext.Consumer>
    {
      status => (
        <p className="status">{status}</p>
      )
    }
  </StatusContext.Consumer>
)

export default Status