import React, { useState, useEffect } from 'react';
import {toggleNav2} from "../js/script";
import {toggleNav3} from "../js/script";
import {Link} from "react-router-dom";
import {menuToggle} from "../js/script";
import * as Scroll from "react-scroll";
import {useSelector} from 'react-redux';
import Logo from '../images/Logo-removebg-preview 2.png'
import Group47 from '../images/Group 47.png';
import Vector1 from '../images/Vector.png';
import Vector2 from '../images/Vector2.png';
import Vector3 from '../images/Vector3.png';
import Vector4 from '../images/Vector4.png';
import Cart from '../images/shopping-white1.svg'




const Navbar = () => {
    const cart = useSelector((state) => state.cart.cart);

    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        let count = 0;
        cart.forEach(item=> {
            count += item.count;
        });
        setCartCount(count);
    }, [cart, cartCount]);

    let toggleNavStatus = false;

    const mobileToggleNav = function() {
        const getSidebar = document.querySelector('.navbar-nav');
        const spotify = document.querySelector('.navbar-nav .spotifyLogo');
        const music = document.querySelector('.navbar-nav .musicLogo');
        const deezer = document.querySelector('.navbar-nav .deezerLogo');
        const sound = document.querySelector('.navbar-nav .soundLogo');
        if (toggleNavStatus === false) {
            getSidebar.style.visibility  = 'visible';    
            getSidebar.style.width = '100%';
            spotify.style.visibility = "visible";
            deezer.style.visibility = "visible";
            sound.style.visibility = "visible";
            music.style.visibility = "visible";
            document.querySelector('.mainPage').style.display = 'none';
            document.querySelector('.toggleMenu').style.display = 'none';
            document.querySelector('.footerPage').style.display = 'none';
            toggleNavStatus = true;
            
        }

        else if (toggleNavStatus === true) {
            getSidebar.style.width = '0px';
            getSidebar.style.visibility  = 'hidden';
            spotify.style.visibility = "hidden";
            deezer.style.visibility = "hidden";
            sound.style.visibility = "hidden";
            music.style.visibility = "hidden";
            document.querySelector('.mainPage').style.display = 'block';
            document.querySelector('.toggleMenu').style.display = 'block';
            document.querySelector('.footerPage').style.display = 'block';
            toggleNavStatus = false;
            }



    } 


    const toggleNav3 = function() {
        if(window.innerWidth < 767){
            document.querySelector('.navbar-nav').style.width = '0px';
            document.querySelector('.navbar-nav .spotifyLogo').style.visibility = "hidden"
            document.querySelector('.navbar-nav .musicLogo').style.visibility = "hidden"
            document.querySelector('.navbar-nav .deezerLogo').style.visibility = "hidden"
            document.querySelector('.navbar-nav .soundLogo').style.visibility = "hidden"
            document.querySelector('.toggleMenu').style.display = 'block';
            document.querySelector('.footerPage').style.display = 'block';
           
            toggleNavStatus = false;
        }
    }



        return (
                <div className="main">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <Link className="navbar-brand" to="">
                                <img src={Logo} alt="logo" />
                            </Link>
                            <button onClick={mobileToggleNav} id="butt2" className="navbar-toggler buttt" type="button">
                                <span>
                                    <img src={Group47} alt="group47" />
                                </span>
                            </button>
                            <div className="navbar-collapse" id="nav1">
                                <div className="navbar-nav">
                                    <Scroll.Link onClick={toggleNav3} className="nav-item nav-link hell1" to="shows" smooth={true} duration={1000}>SHOWS</Scroll.Link>
                                    <Link onClick={toggleNav3} className="nav-item nav-link hell2" to="music">MUSIC</Link>
                                    <Link onClick={toggleNav3} className="nav-item nav-link hell3" to="videos">VIDEO</Link>
                                    <Scroll.Link onClick={toggleNav3} className="nav-item nav-link hell4 js11" to="merch" smooth={true} duration={1000}>MERCH</Scroll.Link>
                                    <Link onClick={toggleNav3} className="nav-item nav-link hell5" to="gallery">GALLERY</Link>
                                    <Scroll.Link onClick={toggleNav3} className="nav-item nav-link hell6 js11" to="about" smooth={true} duration={1000}>ABOUT</Scroll.Link>                        
                                    <Link className="nav-item d-block d-sm-none d-sm-block d-md-none spotifyLogo" to="#">
                                        <img src={Vector1}  alt="vector1" />
                                    </Link>
                                    <Link className="nav-item  d-block d-sm-none d-sm-block d-md-none musicLogo" to="#">
                                        <img src={Vector2}  alt="vector2" />
                                    </Link>
                                    <Link className="nav-item d-block d-sm-none d-sm-block d-md-none deezerLogo" to="#">
                                        <img src={Vector3} alt="vector3" />
                                    </Link>
                                    <Link className="nav-item  d-block d-sm-none d-sm-block d-md-none soundLogo" to="#">
                                        <img src={Vector4} alt="vector4" />
                                    </Link>
                                </div>
                            </div>

                            <button className="leftside1" type="button" 
                            onClick={() => document.querySelector('.toggleMenu').classList.toggle('active')}>
                                <img src={Cart} alt="cart" />
                                <sup className="badge badge-danger badge-pill">{cartCount}</sup>
                            </button>
                           
                        </div>
                    </nav>
                </div>
        )
}





export default Navbar;
