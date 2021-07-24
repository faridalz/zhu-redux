// Action Types
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_THE_ITEM = "INCREASE_THE_ITEM";
export const DECREASE_THE_ITEM = "DECREASE_THE_ITEM";


// Actions

export const addtoCart = item => {
    return { type: ADD_TO_CART, payload: item}
};

export const removeFromCart = item => {
    return { type: REMOVE_FROM_CART, payload: item}
};

export const increaseFromCart = item => {
    return { type: INCREASE_THE_ITEM, payload: item}
};

export const decreaseFromCart = item => {
    return { type: DECREASE_THE_ITEM, payload: item}
};


