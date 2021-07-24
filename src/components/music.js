import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import MusicMobile from "./musicMobile";

const Music = (props) => {
  const footerMargin = document.querySelector('.panel-footer');
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
                    <div className="otherHeader">MUSIC</div>

                    < MusicMobile />
                    <section style={{margin: "0px"}} class="row musicLists"> 
                        <div className="col-md-6 d-none d-md-block d-xl-block trackList">   
                            <div>Generation Why <br /> Tracklist</div>
                            {props.trackList.map(item => (
                                <a key={item.id} style={{textDecoration: "none"}} href="#"><div>{item.name}</div></a>
                            ))}
                        </div>
                        <div class="col-md-6 d-none d-md-block d-xl-block albumList">   
                            <div>Albums</div>
                            {props.albumList.map(item => (
                                <a key={item.id}  style={{textDecoration: "none"}} href="#"><div>{item.name}</div></a>
                            ))}
                            <div style={{marginTop: "10%"}}>Extended Plays</div>
                            {props.extendedList.map(item => (
                                <a key={item.id}  style={{textDecoration: "none"}} href="#"><div style={{fontSize: "1.3vw"}}>{item.name}</div></a>
                            ))}
                            <div style={{marginTop: "10%"}}>Singles</div>
                            {props.singlesList.map(item => (
                                <a key={item.id}  style={{textDecoration: "none"}} href="#"><div style={{fontSize: "1.2vw"}}>{item.name}</div></a>
                            ))}
                        </div>
                    </section>   
                    <hr style={{marginTop: "10%", width: "99%"}} />
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
  


export default connect(mapStateToProps)(Music);
