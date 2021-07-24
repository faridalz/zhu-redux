import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Stream extends Component {
    render() {
        
        return (
            <div>
                 <p className="notice">I ADMIT IT FT 24KGLDN<br />AVAILABLE NOW!</p>
                <div id="poster">
                    <img className="d-none d-md-block d-xl-block" src="images/img_0894 1.png" alt="" />
                    <img className="d-block d-sm-none d-sm-block d-md-none" src="images/Rectangle 65.png" alt="" />
                    <Link to="watch"><p id="p1">WATCH</p></Link>
                    <Link to="stream"><p id="p2">STREAM</p></Link>
                </div>

            </div>
        )
    }
}
