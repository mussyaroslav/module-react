import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../products";

const initialState = {
  products:  products,
  basketProducts: [],
  countProducts: 0,
  allPriceProductsBasket: 0
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProductsBasket: (state, payload) => {
      state.basketProducts.push(payload.payload)
      state.countProducts = state.basketProducts.length
      state.allPriceProductsBasket = state.basketProducts.reduce((acc, current) => {
        return acc + current.price
      }, 0)
    },
    removeProductsBasket : (state, payload) => {
      state.basketProducts = state.basketProducts.filter((item) => {
        return item.idx !== payload.payload
      })
      state.countProducts = state.basketProducts.length
      state.allPriceProductsBasket = state.basketProducts.reduce((acc, current) => {
        return acc + current.price
      }, 0)
    }
  }
})

export const { addProductsBasket, removeProductsBasket } = productsSlice.actions

export default productsSlice.reducer