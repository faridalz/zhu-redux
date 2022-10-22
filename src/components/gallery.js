import {connect} from "react-redux";
import {Link} from "react-router-dom";
import React, {useState, useEffect} from "react";

const Gallery = (props) => {
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
            <div className="otherHeader">GALLERY</div>

            <br /><br/>
            <Link className="gallerySHeader" to="gallery">Shows</Link>
            <Link className="galleryOHeader" to="/gallery-other">Other</Link>
            <br /><br /><br /><br />
            <img id="rec" src="images/Rectangle 50.png" alt="" />
            <br class="d-block d-sm-none d-sm-block d-md-none" />
            <br class="d-block d-sm-none d-sm-block d-md-none" />
            <br class="d-block d-sm-none d-sm-block d-md-none" />

            
            <img id="rec2" src="images/Rectangle 51.png" alt="" />
            
            <br class="d-block d-sm-none d-sm-block d-md-none" />
            <br class="d-block d-sm-none d-sm-block d-md-none" />
            <br class="d-block d-sm-none d-sm-block d-md-none" />

            <img id="rec3" src="images/Rectangle 52.png" alt="" />

            <hr style={{marginTop: "20%", width: "99%"}} />
          </div>
        }     
      </div>
    )
}



const mapStateToProps = state => {
    return {
      trackList: state.trackList,
      albumList: state.albumList,
      extendedList: state.extendedList,
      singlesList: state.singlesList
    }
  }
  


export default connect(mapStateToProps)(Gallery);
