import React from 'react';
import {Link} from "react-router-dom";
import { addtoCart } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Merch = () => {

    window.addEventListener('scroll',()=>{
        let links5 = document.querySelectorAll('.col-md-4');
        links5.forEach((item)=>{
            let ContentPosition3 = item.getBoundingClientRect().top;
            let ScreenPosition = window.innerHeight;
            if(ContentPosition3 < ScreenPosition) {
                item.classList.add('active');
            } 
            else{
                item.classList.remove('active');
        };
        })
    }); 
    
    
    const itemList = useSelector((state) => state.cart.itemList);
    const dispatch = useDispatch();
    return (
        <div>
            <p id='merch'>MERCH</p>
            <hr className="d-none d-md-block d-xl-block" />


            <div className="container d-none d-md-block d-xl-block">
                <section className="row">
                {itemList.map(item => (
                        <div className="col-md-4 col-6" key={item.id}>
                        <Link to="/">
                            <img style={{width: "86%"}} src={item.image} alt={item.image} />
                            <div> {item.nameCategory} <br /> {item.name} <br /> <br /> {item.price}$</div>
                            <button onClick={() => dispatch(addtoCart(item))} className="d-none d-md-block d-xl-block" id='buy'>ADD TO CART</button>
                        </Link>
                        <p>{item.name}</p>
                    </div>
                 ))}
                </section>  
            </div>
        </div>        
    )
}



export default Merch;

