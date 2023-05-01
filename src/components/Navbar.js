import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  const handleChange = (e)=>{
  props.setcolorPicker(e.target.value);
  }
  const handletextChange = (evt)=>{
  props.setTextColor(evt.target.value);
  }


  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
            </ul>
            <input type="color" id="favcolor" name="favcolor" onChange={handleChange} className="mx-2" value={props.colorpicker}/>
            <input type="color" id="favcolor" name="favcolor" onChange={handletextChange} className="mx-3" value={props.textcolor}/>
            <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox"  id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode ==="light" ? "dark" : "light" }`} htmlFor="flexSwitchCheckDefault">Enable Dark Nav</label>
</div>
          </div>
        </div>
 
      </nav>
  )
}
Navbar.prototype = {
    title : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
}
