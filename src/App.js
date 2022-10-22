import {Routes,Route} from "react-router-dom";
import MainPage from "./components/mainPage";
import Music from "./components/music";
import Gallery from "./components/gallery";
import GalleryOther from "./components/galleryOther";
import Videos from "./components/videos";
import Footer from "./components/footer";
import Cart from "./components/cart";
import './App.css';
import Navbar from "./components/navbar";



const App = () => {
  return (
    <>
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
    </>    
  );
}


export default App;
