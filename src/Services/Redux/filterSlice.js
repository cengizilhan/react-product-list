import { createSlice, current } from '@reduxjs/toolkit'
let productArr = require("../data.json");
//let uniqFilterArr = [...new Set(productArr.map(x => x.category))];
let uniqFilterArr = [...new Map(productArr.map(item => [JSON.stringify(item.category), item.category])).values()];

function filterOptimizer() {
  console.log("s");
  }

export const productListSlicer = createSlice({
  name: 'filter',
  initialState: {
    value: 0,
    productList: productArr,
    filterGroup1: uniqFilterArr//Categories
  },
  reducers: {
    filterrun: (state, action) => {
      let querySelected = parseInt(action.payload['payload'])
      let currentArr=state.productList;
      console.log(state.productList);
      let filteredArr = currentArr.filter(function (value) {
        return value.category.categoryid === querySelected;
      })
      console.log("sawa-");
      console.log(filteredArr);
    state.productList = filteredArr;
    filterOptimizer();
  },
/*
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
    */
  },
})

// Action creators are generated for each case reducer function
export const {  filterrun } = productListSlicer.actions

export default productListSlicer.reducer