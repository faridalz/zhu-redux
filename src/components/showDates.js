import React, { Component } from 'react';
import Rectangle21 from '../images/Rectangle 21.png';
import Rectangle66 from '../images/Rectangle 66.png';



export default class Shows extends Component {
    render() {
        return (
                <div id="shows">
                    <p>SHOWS | DATES</p>
                    <p  id="showsInfo">
                        III Points 2021. Miami, FL <br />[FRI, APR 30 2021]
                    </p>
                    <hr />
                    <img className="d-none d-md-block d-xl-block" src={Rectangle21} alt="Rectangle21" />
                    <img className="d-block d-sm-none d-sm-block d-md-none" src={Rectangle66} alt="Rectangle66" />
                
                    <button id="tickets">TICKETS</button>
                    <button id="rsvp">RSVP</button>
                </div>
        )
    }
}
