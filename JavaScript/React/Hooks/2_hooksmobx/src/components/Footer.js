import React from 'react'

//Pegamos o props de um componente fazendo o sua decomposição direta
function Footer({ remaining, total }) {
  return (
    <p data-testid="footer">
      {remaining} / {total} left
    </p>
  )
}

export default Footer
