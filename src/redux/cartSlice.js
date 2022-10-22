import { createSlice } from "@reduxjs/toolkit";
import {data} from '../data';
import {singlesList} from "../data";
import {albumList} from "../data";
import {extendedList} from "../data";
import {trackList} from "../data";


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemList: data,
        singlesList: singlesList,
        albumList: albumList,
        extendedList: extendedList,
        trackList: trackList,
        cart: [],
    },
    reducers: {
        addtoCart: (state, action) => {
            const item = state.itemList.find((item) => item.id === action.payload.id);
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false);
            return {...state, cart: inCart
                 ? state.cart.map((item) => item.id===action.payload.id ? {...item, count: item.count + 1} : item)
                : [...state.cart, {...item, count: 1}],}
        },
        removefromCart: (state, action) => {
            return {...state, cart: state.cart.filter(item => item.id !== action.payload.id),}  

        },
        increasetheItem : (state, action) => {
            return {...state, cart: state.cart.map(item => item.id===action.payload.id ? {...item, count: action.payload.count + 1}: item)}

        },
        decreasetheItem: (state, action) => {
            return {...state, cart: state.cart.map(item => item.id===action.payload.id ? {...item, count: action.payload.count > 1 ? action.payload.count - 1 : 1}: item)}

        },
    }

});

export const {addtoCart, removefromCart, increasetheItem, decreasetheItem} = cartSlice.actions;
export default cartSlice.reducer;