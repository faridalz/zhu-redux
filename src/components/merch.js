import React from 'react';
import {connect} from "react-redux";
import {addtoCart} from "../actions/actions";
import {Link} from "react-router-dom";

const Merch = (props) => {
    return (
        <div>
            <p id='merch'>MERCH</p>
            <hr className="d-none d-md-block d-xl-block" />


            <div className="container d-none d-md-block d-xl-block">
                <section className="row">
                {props.itemList.map(item => (
                        <div className="col-md-4 col-6" key={item.id}>
                        <Link to="/">
                            <img style={{width: "86%"}} src={item.image} alt="" />
                            <div> {item.nameCategory} <br /> {item.name} <br /> <br /> {item.price}$</div>
                            <button onClick={() => props.addtoCart(item)} className="d-none d-md-block d-xl-block" id='buy'>ADD TO CART</button>
                        </Link>
                        <p>{item.name}</p>
                    </div>
                 ))}
                </section>  
                <button id="view">View More Items</button>  
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
  


export default connect(mapStateToProps, {addtoCart})(Merch);

