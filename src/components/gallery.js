import {Link} from "react-router-dom";
import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Rectangle50 from '../images/Rectangle 50.png';
import Rectangle51 from '../images/Rectangle 51.png';
import Rectangle52 from '../images/Rectangle 52.png';


const Gallery = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, []);
    return (
      <div>
          {
          loading ?
          <div style={{marginBottom: "110%"}}>
            <div className="page-loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          :
          <div>
            <div className="otherHeader">GALLERY</div>

            <br /><br/>
            <Link className="gallerySHeader" to="gallery">Shows</Link>
            <Link className="galleryOHeader" to="/gallery-other">Other</Link>
            <br /><br /><br /><br />
            <Slider {...settings} className="d-none d-md-block d-xl-block">
              <div>
              <img id="rec" src={Rectangle50} alt="Rectangle50" />
              </div>
              <div>
              <img id="rec2" src={Rectangle51} alt="Rectangle51" />
              </div>
              <div>
              <img id="rec3" src={Rectangle52} alt="Rectangle52" />
              </div>
              <div>
              <img id="rec11" src={Rectangle50} alt="Rectangle501" />
              </div>
              <div>
              <img id="rec22" src={Rectangle51} alt="Rectangle521" />
              </div>
              <div>
              <img id="rec33" src={Rectangle52} alt="Rectangle531" />
              </div>
            </Slider>
            
            <img id="recMobile1" src={Rectangle50} alt="Rectangle50" />        
            <img id="recMobile2" src={Rectangle51} alt="Rectangle51" />    
            <img id="recMobile3" src={Rectangle52} alt="Rectangle52" />

            <hr style={{marginTop: "20%", width: "99%"}} />
          </div>
        }     
      </div>
    )
}





export default Gallery;
