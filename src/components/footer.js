import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Logofooter  from '../images/Logo-removebg-preview 3.png';



export default class Footer extends Component {
    render() {
        return (
            <div className='footerPage'>
                <footer className="panel-footer">
                    <div className="container">
                        <div className="row">
                        <section id='footerImg' className="col-md-6 col-xs-12">
                            <Link to="/"><img src={Logofooter} alt={Logofooter} /></Link>
                        </section>
                        <section id='footerMenu' className="col-md-6 col-xs-12">
                            <div className="row">
                                <section className="col-md-4">
                                    <span>Follow</span>
                                    <br />
                                    <ul>
                                        <li><Link to="facebook">Facebook</Link></li>
                                        <li><Link to="twitter">Twitter</Link></li>
                                        <li><Link to="instagram">Instagram</Link></li>
                                    </ul>
                            </section>
                            <section className="col-md-4">
                                <span>Stream</span>
                                <br />
                                <ul>
                                    <li><Link to="spotify">Spotify</Link></li>
                                    <li><Link to="apple">Apple Music</Link></li>
                                    <li><Link to="tidal">Tidal</Link></li>
                                    <li><Link to="deezer">Deezer</Link></li>
                                </ul>
                            </section>
                            <section className="col-md-4">
                                <span>Albums</span>
                                <br />
                                <ul>
                                    <li><Link to="semd">S.E.M.D</Link></li>
                                    <li><Link to="getwhy">GetWhy</Link></li>
                                    <li><Link to="genesis">Genesis</Link></li>
                                    <li><Link to="nightday">Nightday</Link></li>
                                </ul>
                            </section>

                            </div>
                            
                        </section>
                        
                        </div>
                    </div>
                    <div id='gotham' className="text-left">&copy; 2021 ZHU Music | Design by Shahin A</div>
                </footer>
            </div>
        )
    }
}
