import React, { Component } from 'react'

export default class Shows extends Component {
    render() {
        return (
                <div id="shows">
                    <p>SHOWS | DATES</p>
                    <p  id="showsInfo">
                        III Points 2021. Miami, FL <br />[FRI, APR 30 2021]
                    </p>
                    <hr />
                    <img className="d-none d-md-block d-xl-block" src="images/Rectangle 21.png" alt="" />
                    <img className="d-block d-sm-none d-sm-block d-md-none" src="images/Rectangle 66.png" alt="" />
                
                    <button id="tickets">TICKETS</button>
                    <button id="rsvp">RSVP</button>
                </div>
        )
    }
}
