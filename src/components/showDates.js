import React, { Component } from 'react';
import Rectangle21 from '../images/Rectangle 21.png';
import Rectangle66 from '../images/Rectangle 66.png';



export default class Shows extends Component {
    render() {
        return (
                <div id="shows">
                    <p>SHOWS | DATES</p>
                    <p  id="showsInfo">
                    Red Rocks Amphitheatre, <br /> Denver <br />[FRI, NOV 11 2022]
                    </p>
                    <hr />
                    <img className="d-none d-md-block d-xl-block" src={Rectangle21} alt="Rectangle21" />
                    <img className="d-block d-sm-none d-sm-block d-md-none" src={Rectangle66} alt="Rectangle66" />
                
                    <a target="_blank" rel="noreferrer" href='https://zhumusic.com/pages/tour' id="tickets">TICKETS</a>
                    <a target="_blank" rel="noreferrer" href='https://www.bandsintown.com/artist-rsvp/1588976?event_id=103658175&utm_campaign=rsvp&utm_medium=web&app_id=js_zhumusic.com&affil_code=js_zhumusic.com&utm_source=widget&came_from=242&spn=0&signature=ZZ02f5a74f801112fd68533d0082f102801e494f11d4553449220f4ee2dbe35e9b' id="rsvp">RSVP</a>
                </div>
        )
    }
}
