import {connect} from "react-redux";
import {Route, Switch} from 'react-router-dom';
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
        <Switch>
          <Route exact path= '/'>
            < MainPage />
          </Route>
          <Route path= '/music' component={Music} />
          <Route path= '/gallery' component={Gallery} />
          <Route path= '/gallery-other' component={GalleryOther} />
          <Route path= '/videos' component={Videos} />
        </Switch>
        < Footer />
    </>    
  );
}


const mapStateToProps = state => {
  return {
    itemList: state.itemList
  }
}

export default connect(mapStateToProps)(App);
