import React from 'react'
import PropTypes from 'prop-types'

// import { Link } from 'react-router-dom'

//props - properties, made components which contaons variables which i will decide what it should be can be called props
export default function Navbar(props) {
  return (
    // <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">{props.About_text}</a>
                        {/* <Link className="nav-link" to="/about">{props.About_text}</Link> */}
                    </li>
                </ul>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark Mode</label>
                </div>
            </div>
        </div>
    </nav>
  )
}


//proptype - fixes type of input 
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    About_text: PropTypes.string 
}

//default - works as a template if no input is given
Navbar.defaultProps = {
    title: 'Set Title Here',
    // About_text: 'About'
}
