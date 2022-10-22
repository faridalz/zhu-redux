import {Routes,Route} from "react-router-dom";
import MainPage from "./components/mainPage";
import Music from "./components/music";
import Gallery from "./components/gallery";
import GalleryOther from "./components/galleryOther";
import Videos from "./components/videos";

import './App.css';



const App = () => {
  return (
    <>
        <Routes>
          <Route path= '/' element={< MainPage />} />
          <Route path= 'music' element={<Music />} />
          <Route path= 'gallery' element={<Gallery />} />
          <Route path= 'gallery-other' element={<GalleryOther />} />
          <Route path= 'videos' element={<Videos />} />
        </Routes>
    </>    
  );
}


export default App;
