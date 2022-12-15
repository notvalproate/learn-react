import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'

export default function Navbar(props) {
  return (
    <nav className="Nav">
        <div className="NavContainer">
            <div className="Logo">
                <a id="TitleTag" href="/">
                    <img id="LogoImg" src="../logo512.png" alt="Logo" />
                    <h1 id="Title">{props.title}</h1>
                </a>
            </div>
            <div className="NavItemContainer">
                <a href="/">
                    <h3 className="Item">About</h3>
                </a>
                <a href="/">
                    <h3 className="Item">Contact</h3>
                </a>
            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
};