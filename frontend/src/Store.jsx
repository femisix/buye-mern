import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      //ADD TO CART
      const newItem = action.payload; //save the item we are gonna add to the cart
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      ); //get existing item based on _id

      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };

    //the above chunk of code updates the current item in the cart

    default:
      return state;
  }
}

//the function above is the code to store new item in the cart

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
