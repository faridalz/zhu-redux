import React, {useState, useEffect} from "react";
import MusicMobile from "./musicMobile";
import {useSelector } from 'react-redux';

const Music = () => {
  const singlesList = useSelector((state) => state.cart.singlesList);
  const albumList = useSelector((state) => state.cart.albumList);
  const extendedList = useSelector((state) => state.cart.extendedList);
  const trackList = useSelector((state) => state.cart.trackList);

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
                            {trackList.map(item => (
                                <a key={item.id} style={{textDecoration: "none"}} href="/"><div>{item.name}</div></a>
                            ))}
                        </div>
                        <div class="col-md-6 d-none d-md-block d-xl-block albumList">   
                            <div>Albums</div>
                            {albumList.map(item => (
                                <a key={item.id}  style={{textDecoration: "none"}} href="/"><div>{item.name}</div></a>
                            ))}
                            <div style={{marginTop: "10%"}}>Extended Plays</div>
                            {extendedList.map(item => (
                                <a key={item.id}  style={{textDecoration: "none"}} href="/"><div style={{fontSize: "1.3vw"}}>{item.name}</div></a>
                            ))}
                            <div style={{marginTop: "10%"}}>Singles</div>
                            {singlesList.map(item => (
                                <a key={item.id}  style={{textDecoration: "none"}} href="/"><div style={{fontSize: "1.2vw"}}>{item.name}</div></a>
                            ))}
                        </div>
                    </section>   
                    <hr style={{marginTop: "10%", width: "99%"}} />
                </div>
              }
          </div>               
    )
}





export default Music;
