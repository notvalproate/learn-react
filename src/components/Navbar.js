import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import { Link } from "react-router-dom"

export default function Navbar(props) {
    const toggle = () => {
        props.modeFunc();
    };

    return (
        <nav className={`Nav${props.mode}`}>
            <div className="NavContainer">
                <div className="Logo">
                    <Link id="TitleTag" to="/">
                        <img id="LogoImg" src="./logo512.png" alt="Logo" />
                        <h1 className={`Title${props.mode}`}>{props.title}</h1>
                    </Link>
                    <input id="darkmode" type="checkbox" onClick={toggle}/>
                </div>
                <div className="NavItemContainer">
                    <Link to="/about">
                        <h3 className={`Item${props.mode}`}>About</h3>
                    </Link>
                    <Link to="/">
                        <h3 className={`Item${props.mode}`}>Contact</h3>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
};