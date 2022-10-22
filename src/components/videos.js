import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Videos = (props) => {
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
            <div className="page-loader" loading = {loading}>
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
            <br class="d-block d-sm-none d-sm-block d-md-none" /><br class="d-block d-sm-none d-sm-block d-md-none" />
            <br class="d-block d-sm-none d-sm-block d-md-none" /><br class="d-block d-sm-none d-sm-block d-md-none" /> 
            <div class="d-block d-sm-none d-sm-block d-md-none" style={{float: "left", color: "#DCEFEB", fontFamily: "Hind", marginLeft: "32%", marginTop: "5%"}}>ZHU - Only (Music Video)</div>
            <div class="d-none d-md-block d-xl-block" style={{float: "left", color: "#DCEFEB", fontFamily: "Hind", marginLeft: "6%", marginTop: "5%"}}>ZHU - Only (Music Video)</div>
            <br /><br /><br />
                <div id="you">
                    <img id="youtube1" src="images/96509447_574956686472298_2126796323122172362_n 1.png" alt="" />
                    <a href="https://youtu.be/qqLmXjx7Uzc" target="_blank" rel="noreferrer" >
                        <img id="y1" src="images/Group.png" alt="" />
                    </a>
                </div>
            <br /><br /><br /><br /><br />
            <div class="d-block d-sm-none d-sm-block d-md-none" style={{float: "left", color: "#DCEFEB", fontFamily: "Hind", marginLeft: "24%"}}>ZHU - Risky Business (Music Video)</div>
            <div class="d-none d-md-block d-xl-block" style={{color: "#DCEFEB", fontFamily: "Hind", marginLeft: "6%"}}>ZHU - Risky Business (Music Video)</div>
            <br /><br />
            <div id="you">
                <img id="youtube1" src="images/emmyslattery_20201103_0 1.png" alt="" />
                <a href="https://youtu.be/n9WDxrzknlE" target="_blank" rel="noreferrer">
                    <img id="y1" src="images/Group.png" alt="" />
                </a>
            </div>  

            <hr style={{marginTop: "20%", width: "99%"}} />
          </div>
        }
            
      </div>
    )
}




export default Videos;
