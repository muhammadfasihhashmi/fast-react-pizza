import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },

    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },

    incQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },

    decQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
        if (item.quantity <= 0) {
          cartSlice.caseReducers.removeFromCart(state, action);
        }
      }
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incQuantity,
  decQuantity,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export const getQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((totalPrice, item) => totalPrice + item.totalPrice, 0);

export const getTotalItem = (state) =>
  state.cart.cart.reduce((totalItems, item) => totalItems + item.quantity, 0);
