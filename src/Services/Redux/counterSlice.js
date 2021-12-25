import { createSlice } from '@reduxjs/toolkit'
let productArr = require("../data.json");
let uniqFilterArr = [...new Set(productArr.map(x => x.category))];

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    productList: productArr,
    filterGroup1: uniqFilterArr//Categories
  },
  reducers: {
    filterrun: (state, action) => {
      let querySelected = action.payload['payload']
      let currentArr=state.productList;
      let filteredArr = currentArr.filter(function (value) {
        return value.category === querySelected;
      })

      state.productList = filteredArr;


    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, filterrun } = counterSlice.actions

export default counterSlice.reducer