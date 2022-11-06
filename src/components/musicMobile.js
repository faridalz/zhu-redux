import React from 'react';
import {Link} from "react-router-dom";
import {useSelector } from 'react-redux';
import musicLines from '../images/Line 22.png';
import musicGroup from '../images/Group.png';
import musicArrowNext from '../images/image.png';
import musicArrow from '../images/arrow-66-16.png';


const MusicMobile = () => {
    const trackList = useSelector((state) => state.cart.trackList);
    return (
        <div>
            <Link className="musicAlbum" to="/music"><p>Album</p></Link>
            <Link className="musicSingle" to="/music/single"><p>Single</p></Link>



            <div id="musicSlider" className="carousel slide d-block d-sm-none d-sm-block d-md-none" data-ride="carousel">
                <div className="carousel-inner">
                    {trackList.map(item => (
                        <div className={item.id === 1 ? "carousel-item active" : "carousel-item"} key={item.id}>
                            <img className="musicLines1" src={musicLines} alt="musicLines" />
                            <img className="musicLines2" src={musicLines} alt="musicLines" />
                            <img className="musicLines3" src={musicLines} alt="musicLines" />
                            <img className="musicLines4" src={musicLines} alt="musicLines" />
                            <div style={{background: "transparent"}} id="musicSurface">
                                <img className="musicImg1" src={item.image} alt="" />
                                <p id="musicP1">{item.name}</p>
                                <img className="musicImg2" src={musicGroup} alt="musicGroup" />
                                <p id="musicP2">{item.date}</p>
                            </div>
                        </div>
                    ))}     
                </div>
                <a className="carousel-control-prev" href="#musicSlider" role="button" data-slide="prev">
                    <img 
                    src={musicArrow} className="musicArrowPrev" aria-hidden="true" alt="musicArrow" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#musicSlider" role="button" data-slide="next">
                    <img src={musicArrowNext} className="musicArrowNext" aria-hidden="true"  alt="musicArrowNext" />
                    <span className="sr-only">Next</span>
                </a>
            </div>  
            <div className="musicTracklistHead d-block d-sm-none d-sm-block d-md-none">Tracklist</div>
            <div className="musicTracklist d-block d-sm-none d-sm-block d-md-none">
                1. Intro (Neon City) <br />
                2. Cold Blooded <br />
                3. In the Morning <br />
                4. Secret Weapon <br />
                5. Electrify Me <br />
                6. Numb <br />
                7. Palm of My Hand <br />
                8. Money <br />
                9. One Minute to Midnight <br />
                10. Reaching <br />
                11. Hometown Girl <br />
                12. Good Life <br />
                13. Generationwhy <br />
                14. Working For It <br />
            </div>         
        </div>
    )
}



export default MusicMobile;
