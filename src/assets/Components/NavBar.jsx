import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav className='navbar'>

      <Link to= "/">Home</Link>
      <Link to= "/contato">Contado</Link>
      <Link to= "/generica">Generica</Link>
      <Link to= "/final">Final</Link>


    </nav>
  )
}

export default NavBar
