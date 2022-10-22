import React from 'react';
import {Link} from "react-router-dom";

const GalleryOther = () => {
    return (
        <div>
            <div className="otherHeader">GALLERY</div>

            <br /><br/>
            <Link className="gallerySHeader" to="/gallery">Shows</Link>
            <Link className="galleryOHeader" to="/gallery-other">Other</Link>

            <br /><br /><br /><br />
            <div class="d-block d-sm-none d-sm-block d-md-none" 
            style={{textAlign: "center", color: "#DCEFEB", fontFamily: "Hind", fontWeight: "500"}}>F/W 2020 fashion show</div>
            
            <br /><br />

            <img id="rec4" src="images/126307605_2897984023769750_1708272536119593819_n 1.png" alt="" />

            <img id="rec5" src="images/126307605_2897984023769750_1708272536119593819_n 2.png" alt="" />
            
            <img id="rec6" src="images/126307605_2897984023769750_1708272536119593819_n 3.png" alt="" />
     

            <hr style={{marginTop: "20%", width: "99%"}} />
        </div>
    )
}



export default GalleryOther;
