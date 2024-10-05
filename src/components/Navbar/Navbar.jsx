import React from 'react'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import "../../styles/components/Navbar/Navbar.css"
 
export default function Navbar() {
  return (
    <nav className='navbar'>
<Logo/>
<Menu/>
<button>Login</button>
    </nav>
  )
}
