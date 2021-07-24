import {data} from "../data";
import {ADD_TO_CART} from "../actions/actions";
import {REMOVE_FROM_CART} from "../actions/actions";
import {INCREASE_THE_ITEM} from "../actions/actions";
import {DECREASE_THE_ITEM} from "../actions/actions";
import {singlesList} from "../data";
import {albumList} from "../data";
import {extendedList} from "../data";
import {trackList} from "../data";


const INITIAL_STATE = {
    itemList: data,
    singlesList: singlesList,
    albumList: albumList,
    extendedList: extendedList,
    trackList: trackList,
    cart: [],
}


export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = state.itemList.find((prod) => prod.id === action.payload.id);
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false);
            return {...state, cart: inCart
                 ? state.cart.map((item) => item.id===action.payload.id ? {...item, count: item.count + 1} : item)
                : [...state.cart, {...item, count: 1}],}
        case REMOVE_FROM_CART:
            return {...state, cart: state.cart.filter(item => item.id !== action.payload.id),}  

                
        case INCREASE_THE_ITEM: 
            return {...state, cart: state.cart.map(item => item.id===action.payload.id ? {...item, count: action.payload.count + 1}: item)}
        
        
        case DECREASE_THE_ITEM: 
            return {...state, cart: state.cart.map(item => item.id===action.payload.id ? {...item, count: action.payload.count > 1 ? action.payload.count - 1 : 1}: item)}
        
        default:
            return state;
    }
};