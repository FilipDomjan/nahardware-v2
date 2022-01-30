import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../img/little-logo-circular.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    let listener = null
    const [scrollState, setScrollState] = useState("top")

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if(scrolled >= 100) {
                if (scrollState !== "scrolled"){
                    setScrollState("scrolled");
                }
            }
            else{
                if (scrollState !== "top"){
                    setScrollState("top");
                }
            }
        })
    })

    const [showMenu, setMenu] = useState(false);

    const handleSetMenu = () => {
        setMenu(!showMenu);
    }

    return(
        <>
            {
                showMenu && (
                    <div className="menu">
                        <div className="menu-items">
                            <Link to="/" onClick={handleSetMenu}>HOME</Link>
                            <Link to="/projects" onClick={handleSetMenu}>PROJECTS</Link>
                            <Link to="/videos" onClick={handleSetMenu}>VIDEOS</Link>
                            <Link to="/contact" onClick={handleSetMenu}>CONTACT</Link>
                            <a href="" class="signin-btn" onClick={handleSetMenu}>SIGN IN</a>
                        </div>
                    </div>
                )
            }
            
            <div className={`${scrollState === "top" ? "navbar" : "navbar navbar-scrolled"}`}>
                <div className="logo" onClick={() => window.location.href="/"}>
                    <img src={logo} alt="logo" />
                </div>
                <div className="links">
                    <Link to="/">HOME</Link>
                    <Link to="/projects">PROJECTS</Link>
                    <Link to="/videos">VIDEOS</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
                <div className="signin">
                    <a href="">SIGN IN</a>
                </div>
                <div className="phone-bars">
                    <FontAwesomeIcon icon={showMenu == true ? faTimes : faBars} onClick={handleSetMenu} />
                </div>
            </div>
        </>
    )
}

export default Navbar;