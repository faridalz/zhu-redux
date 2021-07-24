import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="d-none d-md-block d-xl-block" id="mainImage"><img id="zhu1" src="images/Rectangle 18.png" alt="" /></div>
                <div className="d-block d-sm-none d-sm-block d-md-none" id="mainImageMobile"><img id="zhu12" src="images/83103491_202388367480184_1284322106362841989_n 1.png" alt="" /></div>
                
                <input type="text" id="name" placeholder="name" />
                <input type="text" id="email" placeholder="e-mail" />
                <input type="text" id="country" placeholder="country" />
                <Link className="d-none d-md-block d-xl-block" id="sub" to="#">SUBSCRIBE</Link>

                <p id="subs1" className="d-block d-sm-none d-sm-block d-md-none">SUBSCRIBE TO OUR<br />MAILING LIST</p>


                <button className=" d-block d-sm-none d-sm-block d-md-none" id="subMobile" href="#">SUBSCRIBE</button>


                <div className="d-none d-md-block d-xl-block" id="stream"></div>
                <p className="d-none d-md-block d-xl-block" id="stream2" >STREAM ZHU’S MUSIC</p>
                <p className="d-none d-md-block d-xl-block" id="stream3">Stay Connected & Follow Zhu on all digital platforms </p>
                <Link className="logosHome logosHome1 d-none d-md-block d-xl-block" to="#">
                    <img src="images/Vector.png" alt="" />
                </Link>
                <Link className="logosHome logosHome2 d-none d-md-block d-xl-block" to="#">
                    <img src="images/Vector2.png" alt="" />
                </Link>
                <Link className="logosHome logosHome3 d-none d-md-block d-xl-block" to="#">
                    <img src="images/Vector3.png" alt="" />
                </Link>
                <Link className="logosHome logosHome4 d-none d-md-block d-xl-block" to="#">
                    <img src="images/Vector4.png" alt="" />
                </Link>
            </div>
        )
    }
}
