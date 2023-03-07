import React from 'react'
import {Link,NavLink} from 'react-router-dom';
import { Button } from 'bootstrap';

function Navbar() {
  return (
    <div className="container-fluid ">
      <nav className="navbar navbar-expand-lg bg-body-dark ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active"  to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
       
      <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact Us</NavLink></li>  
     
        <li className="nav-item">
          <NavLink className="nav-link disabled">Disabled</NavLink>
        </li>
      </ul>
      <Link to= "/user/add" className="outline-danger">Add User</Link>

    </div>
  </div>
</nav>

    </div>
  )
}



export default Navbar

