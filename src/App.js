import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import MainPage from "./components/mainPage";
import Music from "./components/music";
import Gallery from "./components/gallery";
import GalleryOther from "./components/galleryOther";
import Videos from "./components/videos";

import './App.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Cart from "./components/cart";


const App = () => {
  return (
      <Router basename={ process.env.PUBLIC_URL + '/' }>
        <div>
          < Navbar />
          < Cart />
          <Routes>
            <Route path= '/' element={< MainPage />} />
            <Route path= 'music' element={<Music />} />
            <Route path= 'gallery' element={<Gallery />} />
            <Route path= 'gallery-other' element={<GalleryOther />} />
            <Route path= 'videos' element={<Videos />} />
          </Routes>
          < Footer />
        </div>
      </Router>
  );
}


export default App;
