import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/Doctors">Doctors</Link>
      <Link to="/Login">Doctor's Login</Link>
      <Link to="/Register">Patient's Registration</Link>

    </div>
  )
}
