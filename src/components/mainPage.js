import Home from "./home";
import Stream from "./Stream";
import Shows from "./showDates";
import Merch from "./merch";
import MerchMobile from "./merchMobile";
import About from "./about";

import React, {useState, useEffect} from "react";


export default function MainPage() {
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true)
    setTimeout(() => {
      setisLoading(false)
    }, 3000);
  }, []);
  return (
      <div className="mainPage">
        {
          isLoading ?
          <div style={{marginBottom: "110%"}}>
            <div className="page-loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          :
          <div>
              < Home />
              < Stream />
              < Shows />
              < Merch />
              < MerchMobile />
              < About />
          </div>
        }
        
      </div>
  );
}
