import React, { Component } from 'react';

import Group28 from '../images/Group 28.png';
import Rectangle12 from '../images/Rectangle 12.png';



export default class About extends Component {
    render() {
        return (
            <div>
                <div id="about">
                    <img className="d-none d-md-block d-xl-block" src={Group28} alt="Group28" />
                </div>

                <div id="aboutMobileHeader" className="d-block d-sm-none d-sm-block d-md-none">ABOUT</div>
                <div id="aboutMobile" className="d-block d-sm-none d-sm-block d-md-none">
                    <img src={Rectangle12} alt="Rectangle12" />
                    <div className="aboutPart1">Steven Zhu, known <br /> mononymously
                        as
                        <div>ZHU</div>
                        , <br /> (born April 28, 1989) is <br /> an 
                        American musician <br /> and singer who
                        has been <br /> active since the <br /> beginning
                        of 2014, signed <br /> to Mind of a Genius <br />
                        Records.
                     </div>
                    <div className="aboutPart2">
                        Until mid-2014, Zhu <br />
                        remained anonymous, <br /> asking to be
                        judged <br /> by his music alone. 
                        <div> His <br /> 
                            debut album, <br /> Generationwhy,
                            was  </div> <br />
                            released on July 29, 2016..
                    </div>       
                </div>
            </div>
        )
    }
}
