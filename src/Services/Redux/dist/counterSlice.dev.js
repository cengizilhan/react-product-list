"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.filterrun = exports.incrementByAmount = exports.decrement = exports.increment = exports.counterSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var productArr = require("../data.json");

var uniqFilterArr = _toConsumableArray(new Set(productArr.map(function (x) {
  return x.category;
})));

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