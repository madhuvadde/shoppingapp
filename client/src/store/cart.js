import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
    isCartOpen: false,
  },
  reducers: {
    itemAddedToCart: (cartItems, action) => {
      const { item } = action.payload;
      const findItem = cartItems.list.find(
        (cartItem) => cartItem.id === item.id
      );
      if (findItem) {
        const items = cartItems.list.map((cartItem) =>
          item.id === cartItem.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
        cartItems.list = items;
      } else {
        cartItems.list.push(item);
      }
    },
    itemRemovedFromCart: (cartItems, action) => {
      const existingCartItem = cartItems.list.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (existingCartItem.quantity === 1) {
        cartItems.list = cartItems.list.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
      } else {
        cartItems.list = cartItems.list.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    },
    clearCartItem: (cartItems, action) => {
      cartItems.list = cartItems.list.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
    cartToggled: (cartItems, action) => {
      cartItems.isCartOpen = action.payload.toggle;
    },
  },
});
export default cartSlice.reducer;

const { itemAddedToCart, itemRemovedFromCart, clearCartItem, cartToggled } =
  cartSlice.actions;
//actionCreator
export const addItemToCart = (item) => {
  return itemAddedToCart({
    item,
  });
};
export const removeItemFromCart = (id) => {
  return itemRemovedFromCart({
    id,
  });
};
export const clearItemFromCart = (id) => {
  return clearCartItem({
    id,
  });
};
export const toggleCart = (toggle) => {
  return cartToggled({
    toggle,
  });
};

//memoized Selector for calculating cart Total
export const getCartTotal = createSelector(
  (cartItems) => cartItems,
  (cartItems) =>
    cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
);
