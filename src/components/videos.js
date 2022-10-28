import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Youtube1 from '../images/96509447_574956686472298_2126796323122172362_n 1.png';
import Group1 from '../images/Group.png';
import Youtube2 from '../images/emmyslattery_20201103_0 1.png';



const Videos = () => {
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
            <div style={{marginBottom: "8%"}} className="otherHeader">VIDEOS</div>

            <Link className="gallerySHeader" to="/videos">Clips</Link>
            <Link className="galleryOHeader" to="/live">Live</Link>
            <br className="d-block d-sm-none d-sm-block d-md-none" /><br className="d-block d-sm-none d-sm-block d-md-none" />
            <br className="d-block d-sm-none d-sm-block d-md-none" /><br className="d-block d-sm-none d-sm-block d-md-none" /> 
            <div className="d-block d-sm-none d-sm-block d-md-none" style={{float: "left", color: "#DCEFEB", fontFamily: "Hind", marginLeft: "32%", marginTop: "5%"}}>ZHU - Only (Music Video)</div>
            <div className="d-none d-md-block d-xl-block" style={{float: "left", color: "#DCEFEB", fontFamily: "Hind", marginLeft: "6%", marginTop: "5%"}}>ZHU - Only (Music Video)</div>
            <br /><br /><br />
                <div id="you">
                    <img className="youtube1" src={Youtube1} alt="Youtube1" />
                    <a href="https://youtu.be/qqLmXjx7Uzc" target="_blank" rel="noreferrer" >
                        <img className="y1" src={Group1} alt="Group1" />
                    </a>
                </div>
            <br /><br /><br /><br /><br />
            <div className="d-block d-sm-none d-sm-block d-md-none" style={{float: "left", color: "#DCEFEB", fontFamily: "Hind", marginLeft: "24%"}}>ZHU - Risky Business (Music Video)</div>
            <div className="d-none d-md-block d-xl-block" style={{color: "#DCEFEB", fontFamily: "Hind", marginLeft: "6%"}}>ZHU - Risky Business (Music Video)</div>
            <br /><br />
            <div id="you">
                <img className="youtube1" src={Youtube2} alt="Youtube2" />
                <a href="https://youtu.be/n9WDxrzknlE" target="_blank" rel="noreferrer">
                    <img className="y1" src={Group1} alt="Group1" />
                </a>
            </div>  

            <hr style={{marginTop: "20%", width: "99%"}} />
          </div>
        }
            
      </div>
    )
}




export default Videos;
