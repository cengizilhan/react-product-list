"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.filterrun = exports.incrementByAmount = exports.decrement = exports.increment = exports.counterSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _pListFilterHelper = require("../../Helpers/pListFilterHelper");

var productArr = require("../data.json");

var uniqFilterArr = (0, _pListFilterHelper.filterGroupCreator)(productArr);
console.warn("sawac");
console.table(uniqFilterArr);
var counterSlice = (0, _toolkit.createSlice)({
  name: 'counter',
  initialState: {
    value: 0,
    productList: productArr,
    filterGroup1: uniqFilterArr //Categories

  },
  reducers: {
    filterrun: function filterrun(state, action) {
      var querySelected = action.payload['payload'];
      var currentArr = state.productList;
      var filteredArr = currentArr.filter(function (value) {
        return value.category === querySelected;
      });
      state.productList = filteredArr;
    },
    increment: function increment(state) {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: function decrement(state) {
      state.value -= 1;
    },
    incrementByAmount: function incrementByAmount(state, action) {
      state.value += action.payload;
    }
  }
}); // Action creators are generated for each case reducer function

exports.counterSlice = counterSlice;
var _counterSlice$actions = counterSlice.actions,
    increment = _counterSlice$actions.increment,
    decrement = _counterSlice$actions.decrement,
    incrementByAmount = _counterSlice$actions.incrementByAmount,
    filterrun = _counterSlice$actions.filterrun;
exports.filterrun = filterrun;
exports.incrementByAmount = incrementByAmount;
exports.decrement = decrement;
exports.increment = increment;
var _default = counterSlice.reducer;
exports["default"] = _default;