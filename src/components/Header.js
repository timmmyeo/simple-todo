import React from "react"
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
      <Navbar bg="dark" sticky="top" expand="lg" variant="dark">
        <Navbar.Brand href="#home">Todo App (Yes, it's basically a list)</Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default Header