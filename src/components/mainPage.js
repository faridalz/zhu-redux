import Home from "./home";
import Stream from "./Stream";
import Shows from "./showDates";
import Merch from "./merch";
import MerchMobile from "./merchMobile";
import About from "./about";

import React, {useState, useEffect} from "react";


export default function MainPage() {
  const footerMargin = document.querySelector('.panel-footer');
  const footerMargin2 = document.querySelector('.panel-footer');
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
