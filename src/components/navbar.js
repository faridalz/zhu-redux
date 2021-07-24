import React, { useState, useEffect } from 'react';
import {toggleNav2} from "../js/script";
import {toggleNav3} from "../js/script";
import {Link} from "react-router-dom";
import {menuToggle} from "../js/script";
import {connect} from "react-redux";
import * as Scroll from "react-scroll";

const Navbar = (props) => {
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        let count = 0;
        props.cart.forEach(item=> {
            count += item.count;
        });
        setCartCount(count);
    }, [props, cartCount])

        return (
                <div className="main">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <Link className="navbar-brand" to="">
                                <img src="images/Logo-removebg-preview 2.png" alt="" />
                            </Link>
                            <button onClick={toggleNav2} id="butt2" className="navbar-toggler buttt" type="button">
                                <span>
                                    <img src="images/Group 47.png" alt="" />
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
                                        <img src="images/Vector.png"  alt="" />
                                    </Link>
                                    <Link className="nav-item  d-block d-sm-none d-sm-block d-md-none musicLogo" to="#">
                                        <img src="images/Vector2.png"  alt="" />
                                    </Link>
                                    <Link className="nav-item d-block d-sm-none d-sm-block d-md-none deezerLogo" to="#">
                                        <img src="images/Vector3.png" alt="" />
                                    </Link>
                                    <Link className="nav-item  d-block d-sm-none d-sm-block d-md-none soundLogo" to="#">
                                        <img src="images/Vector4.png" alt="" />
                                    </Link>
                                </div>
                            </div>

                            <button className="leftside1" type="button" onClick={menuToggle}>
                                <img src="images/shopping-white1.svg" alt="" />
                                <sup className="badge badge-danger badge-pill">{cartCount}</sup>
                            </button>
                           
                        </div>
                    </nav>
                </div>
        )
}



const mapStateToProps = state => {
    return {
      cart: state.cart
    }
  }
  


export default connect(mapStateToProps)(Navbar);
