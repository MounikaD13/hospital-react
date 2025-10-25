import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container nav-container">
        <Link className="navbar-brand " to="/">
          MS Care
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Patients">
              <i class="fa-solid fa-hospital-user"></i>
                Patients
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Doctors">
                <i class="fa-solid fa-stethoscope"></i>Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">
               <i class="fa-solid fa-user-doctor"></i>Login
              </Link>
            </li>
            <li className="nav-item register">
              <Link className="nav-link" to="/Register">
              <i class="fa-solid fa-calendar-check"></i>
                Book_Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
