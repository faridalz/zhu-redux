import React from 'react';
import { addtoCart } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import arrow1  from '../images/arrow-66-16.png';
import arrow2  from '../images/image.png';




const MerchMobile = () => {
    const itemList = useSelector((state) => state.cart.itemList);

    const dispatch = useDispatch();

    return (
        <div>
            <div id="slider1" className="carousel slide d-block d-sm-none d-sm-block d-md-none" data-ride="carousel">
                <div className="carousel-inner">
                    
                    {itemList.map(item =>  (
                        <div className={item.id === 1 ? "carousel-item active" : "carousel-item"} key={item.id}>
                            <div style={{background: "transparent"}} className="shop">
                                <img className="d-block d-sm-none d-sm-block d-md-none" src={item.image} alt="" />
                                <p className="sh2">
                                    {item.name}
                                </p>
                                <p style={{color: "green", marginBottom: "20%", fontSize: "3.5vw"}}>$ {item.price}</p>
                                <button onClick={() => dispatch(addtoCart(item))} id="but1">Add To Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#slider1" role="button" data-slide="prev">
                    <img style={{width: "3vw", paddingBottom: "72vw", marginLeft: "10vw"}} src={arrow1} aria-hidden="true" alt="arrow1" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#slider1" role="button" data-slide="next">
                    <img style={{width: "3vw", paddingBottom: "72vw", marginRight: "10vw"}} src={arrow2} aria-hidden="true" alt="arrow2" />
                    <span className="sr-only">Next</span>
                </a>
            </div> 
        </div>       
    )
}





export default MerchMobile;

