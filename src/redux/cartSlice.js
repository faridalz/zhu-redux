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

        },
        increasetheItem : (state, action) => {

        },
        decreasetheItem: (state, action) => {

        },
    }

});

export const {addtoCart, removefromCart, increasetheItem, decreasetheItem} = cartSlice.actions;
export default cartSlice.reducer;