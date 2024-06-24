 
import './Navbar.css';
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function NavLine() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container">
        <a className="navbar-brand" href="index.html">Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Departments
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><a className="dropdown-item" href="#">CSE</a></li>
                <li><a className="dropdown-item" href="#">IT</a></li>
                <li><a className="dropdown-item" href="#">ECE</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Income</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Non-Recurring Expenditure</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Recurring Expenditure
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li><a className="dropdown-item" href="#">PHYSICAL EXPENDITURE</a></li>
                <li><a className="dropdown-item" href="#">MEDICAL EXPENDITURE</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-success" type="submit">Login</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavLine;