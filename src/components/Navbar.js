import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'

export default function Navbar(props) {
    const toggle = () => {
        props.modeFunc();
    };

    return (
        <nav className={`Nav${props.mode}`}>
            <div className="NavContainer">
                <div className="Logo">
                    <a id="TitleTag" href="/">
                        <img id="LogoImg" src="../logo512.png" alt="Logo" />
                        <h1 className={`Title${props.mode}`}>{props.title}</h1>
                    </a>
                    <input id="darkmode" type="checkbox" onClick={toggle}/>
                </div>
                <div className="NavItemContainer">
                    <a href="/">
                        <h3 className={`Item${props.mode}`}>About</h3>
                    </a>
                    <a href="/">
                        <h3 className={`Item${props.mode}`}>Contact</h3>
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