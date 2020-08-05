import React from "react"
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <div>
    <Navbar fixed="bottom">
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Made by Timothy Yeo
      </Navbar.Text>
    </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Footer