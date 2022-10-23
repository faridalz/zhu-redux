import React from 'react';

import {menuToggle} from "../js/script";
import { removefromCart } from '../redux/cartSlice';
import { decreasetheItem } from '../redux/cartSlice';
import { increasetheItem } from '../redux/cartSlice';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';




const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);

    const totalPrice = cart.reduce((total, item) => (total += item.price * item.count), 0);   
        if (cart.length) {
            return (
                <div>
                    <div className="toggleMenu">
                        <h5>My Cart</h5>
                        <h6 onClick={menuToggle}>X</h6>
                         <hr />
                         {cart.map(item =>(
                             <div className="shopping" key={item.id}>
                             <img src = {item.image} alt='image1' />
                             <div>
                                 <p className="itemName">{item.name}</p>
                                 <p className="itemInfo">Price: {item.price}$</p>
                                 <p className="itemInfo">Ordered {item.count} items.</p>
                                 <p className="itemPrice">Total: ${item.price * item.count}</p>
                                 <button onClick={() => dispatch(decreasetheItem(item))} className="btn btn-primary">-</button>
                                 <button onClick={() => dispatch(removefromCart(item))} className="removeButton btn btn-danger">Remove</button>
                                 <button onClick={() => dispatch(increasetheItem(item))} className="btn btn-primary">+</button>
                             </div>
                             <hr />

                         </div>
                         ))}
                         <hr />
                         <h6>Total Price: ${totalPrice}</h6>
                        <button className="btn btn-success w-100">BUY</button>
    
                    </div>              
                </div>
            )
        } 
        else {
            return(  
                <div className="toggleMenu">
                    <h5>My Cart</h5>
                    <h6 onClick={menuToggle}>X</h6>
                    <hr />
                    <br className="d-none d-md-block d-xl-block" />
                    <br className="d-none d-md-block d-xl-block" />
                    <img style={{width: "96%", opacity: "25%", marginTop: "15%", marginLeft: "2%"}} src="images/shopping2.svg" alt="" />
                </div>)
        }
}




export default Cart;
