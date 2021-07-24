import React from 'react';
import {connect} from "react-redux";
import {addtoCart} from "../actions/actions";



const MerchMobile = (props) => {
    const activeCarousel = document.querySelector('.carousel-item');

    return (
        <div>
            <div id="slider1" className="carousel slide d-block d-sm-none d-sm-block d-md-none" data-ride="carousel">
                <div className="carousel-inner">
                    
                    {props.itemList.map(item =>  (
                        <div className={item.id === 1 ? "carousel-item active" : "carousel-item"} key={item.id}>
                            <div style={{background: "transparent"}} className="shop">
                                <img className="d-block d-sm-none d-sm-block d-md-none" src={item.image} alt="" />
                                <p className="sh2">
                                    {item.name}
                                </p>
                                <p style={{color: "green", marginBottom: "20%", fontSize: "3.5vw"}}>$ {item.price}</p>
                                <button onClick={() => props.addtoCart(item)} id="but1">Add To Cart</button>
                                <button id="but2">MORE ITEMS</button>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#slider1" role="button" data-slide="prev">
                    <img style={{width: "3vw", paddingBottom: "72vw", marginLeft: "10vw"}} src="images/arrow-66-16.png" aria-hidden="true" alt="" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#slider1" role="button" data-slide="next">
                    <img style={{width: "3vw", paddingBottom: "72vw", marginRight: "10vw"}} src="images/image.png" aria-hidden="true" alt="" />
                    <span className="sr-only">Next</span>
                </a>
            </div> 
        </div>       
    )
}





const mapStateToProps = state => {
    return {
      itemList: state.itemList,
      cart: state.cart
    }
  }
  


export default connect(mapStateToProps, {addtoCart})(MerchMobile);

