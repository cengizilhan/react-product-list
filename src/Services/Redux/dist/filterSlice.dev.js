"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.filterrun = exports.productListSlicer = void 0;

var _toolkit = require("@reduxjs/toolkit");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var productArr = require("../data.json"); //let uniqFilterArr = [...new Set(productArr.map(x => x.category))];


var uniqFilterArr = _toConsumableArray(new Map(productArr.map(function (item) {
  return [JSON.stringify(item.category), item.category];
})).values());

function filterOptimizer() {
  console.log("s");
}

var productListSlicer = (0, _toolkit.createSlice)({
  name: 'filter',
  initialState: {
    value: 0,
    productList: productArr,
    filterGroup1: uniqFilterArr //Categories

  },
  reducers: {
    filterrun: function filterrun(state, action) {
      var querySelected = parseInt(action.payload['payload']);
      var currentArr = state.productList;
      console.log(state.productList);
      var filteredArr = currentArr.filter(function (value) {
        return value.category.categoryid === querySelected;
      });
      console.log("sawa-");
      console.log(filteredArr);
      state.productList = filteredArr;
      filterOptimizer();
    }
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

  }
}); // Action creators are generated for each case reducer function

exports.productListSlicer = productListSlicer;
var filterrun = productListSlicer.actions.filterrun;
exports.filterrun = filterrun;
var _default = productListSlicer.reducer;
exports["default"] = _default;