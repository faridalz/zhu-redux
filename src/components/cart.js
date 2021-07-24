import React, { Component } from 'react';
import {connect} from "react-redux";
import {removeFromCart} from "../actions/actions";
import {increaseFromCart} from "../actions/actions";
import {decreaseFromCart} from "../actions/actions";
import {menuToggle} from "../js/script";




const Cart = (props) => {
    const totalPrice = props.cart.reduce((total, item) => (total += item.price * item.count), 0);   
        if (props.cart.length) {
            return (
                <div>
                    <div className="toggleMenu">
                        <h5>My Cart</h5>
                        <h6 onClick={menuToggle}>X</h6>
                         <hr />
                         {props.cart.map(item =>(
                             <div className="shopping" key={item.id}>
                             <img src = {item.image} />
                             <div>
                                 <p className="itemName">{item.name}</p>
                                 <p className="itemInfo">Price: {item.price}$</p>
                                 <p className="itemInfo">Ordered {item.count} items.</p>
                                 <p className="itemPrice">Total: ${item.price * item.count}</p>
                                 <button onClick={() => props.decreaseFromCart(item)} className="btn btn-primary">-</button>
                                 <button onClick={() => props.removeFromCart(item)} className="removeButton btn btn-danger">Remove</button>
                                 <button onClick={() => props.increaseFromCart(item)} className="btn btn-primary">+</button>
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



const mapStateToProps = state => {
    return {
      cart: state.cart
    }
  }
  


export default connect(mapStateToProps, {removeFromCart, increaseFromCart, decreaseFromCart})(Cart);
