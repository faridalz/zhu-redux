import React, { Component } from 'react';
import Rectangle65 from '../images/Rectangle 65.png';
import img_0894 from '../images/img_0894 1.png';



export default class Stream extends Component {
    render() {
        
        return (
            <div>
                 <p className="notice">I ADMIT IT FT 24KGLDN<br />AVAILABLE NOW!</p>
                <div id="poster">
                    <img className="d-none d-md-block d-xl-block" src={img_0894} alt="img_0894" />
                    <img className="d-block d-sm-none d-sm-block d-md-none" src={Rectangle65} alt="Rectangle65" />
                    <a href='https://www.youtube.com/watch?v=BMLsn4rUOg4' target="_blank" rel="noreferrer"><p id="p1">WATCH</p></a>
                    <a href='https://www.youtube.com/watch?v=BMLsn4rUOg4' target="_blank" rel="noreferrer"><p id="p2">STREAM</p></a>
                </div>

            </div>
        )
    }
}
