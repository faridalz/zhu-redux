import React from 'react';
import {Link} from "react-router-dom";
import {useSelector } from 'react-redux';

const MusicMobile = () => {
    const trackList = useSelector((state) => state.cart.trackList);
    return (
        <div>
            <Link className="d-block d-sm-none d-sm-block d-md-none musicAlbum" to="/music"><p>Album</p></Link>
            <Link className="d-block d-sm-none d-sm-block d-md-none musicSingle" to="/music/single"><p>Single</p></Link>



            <div id="musicSlider" className="carousel slide d-block d-sm-none d-sm-block d-md-none" data-ride="carousel">
                <div className="carousel-inner">
                    {trackList.map(item => (
                        <div className={item.id === 1 ? "carousel-item active" : "carousel-item"} key={item.id}>
                            <img className="musicLines1" src="images/Line 22.png" alt="" />
                            <img className="musicLines2" src="images/Line 22.png" alt="" />
                            <img className="musicLines3" src="images/Line 22.png" alt="" />
                            <img className="musicLines4" src="images/Line 22.png" alt="" />
                            <div style={{background: "transparent"}} id="musicSurface">
                                <img className="musicImg1" src={item.image} alt="" />
                                <p id="musicP1">{item.name}</p>
                                <img className="musicImg2" src="images/Group.png" alt="" />
                                <p id="musicP2">{item.date}</p>
                            </div>
                        </div>
                    ))}     
                </div>
                <a className="carousel-control-prev" href="#musicSlider" role="button" data-slide="prev">
                    <img style={{position: "absolute", width: "21%", left: "38%", top: "0%", marginTop: "381%", marginLeft: "63%"}} src="images/arrow-66-16.png" aria-hidden="true" alt="" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#musicSlider" role="button" data-slide="next">
                    <img style={{position: "absolute", width: "21%", right: "38%", top: "0%", marginTop: "381%", marginRight: "63%"}} src="images/image.png" aria-hidden="true"  alt="" />
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
