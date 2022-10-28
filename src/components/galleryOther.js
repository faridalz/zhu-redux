import React from 'react';
import {Link} from "react-router-dom";
import Other1 from '../images/126307605_2897984023769750_1708272536119593819_n 1.png';
import Other2 from '../images/126307605_2897984023769750_1708272536119593819_n 2.png';
import Other3 from '../images/126307605_2897984023769750_1708272536119593819_n 3.png';


const GalleryOther = () => {
    return (
        <div>
            <div className="otherHeader">GALLERY</div>

            <br /><br/>
            <Link className="gallerySHeader" to="/gallery">Shows</Link>
            <Link className="galleryOHeader" to="/gallery-other">Other</Link>

            <br /><br /><br /><br />
            <div className="d-block d-sm-none d-sm-block d-md-none" 
            style={{textAlign: "center", color: "#DCEFEB", fontFamily: "Hind", fontWeight: "500"}}
            >F/W 2020 fashion show</div>
            
            <br /><br />

            <img id="rec4" src={Other1} alt="Other1" />

            <img id="rec5" src={Other2} alt="Other2" />
            
            <img id="rec6" src={Other3} alt="Other3" />
     

            <hr style={{marginTop: "20%", width: "99%"}} />
        </div>
    )
}



export default GalleryOther;
