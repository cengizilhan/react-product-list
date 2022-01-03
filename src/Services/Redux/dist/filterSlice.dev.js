"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.filterrun = exports.productListSlicer = void 0;

var _toolkit = require("@reduxjs/toolkit");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var productArr = require("../data.json");

var categoriesArr = require("../category.json");

var categoriesArrv2 = categoriesArr.map(function (obj) {
  return _objectSpread({}, obj, {
    isActive: false
  });
}); //add new property to array for filter
//let uniqFilterArr = [...new Set(productArr.map(x => x.category))];
//let uniqFilterArr = [...new Map(productArr.map(item => [JSON.stringify(item.category), item.category])).values()];

var productListSlicer = (0, _toolkit.createSlice)({
  name: 'filter',
  initialState: {
    value: 0,
    productList: productArr,
    filterGroup1: categoriesArrv2,
    //Categories
    pagination: {
      rowsPerPage: 1,
      count: 1,
      totalPages: 5 //Math.ceil(count / rowsPerPage)

    },
    sorting: {
      sortName: "sortingPrice",
      sortType: "asc",
      isActive: false
    },
    setFilter: "",
    searchKey: ""
  },
  reducers: {
    filterrun: function filterrun(state, action) {
      var querySelected = parseInt(action.payload['payload']);
      var currentArr = state.productList;
      var filteredArr = state.productList; // filtre ayarlancak

      state.filterGroup1.map(function (x) {
        if (x.categoryid === querySelected) {
          x.isActive === false ? x.isActive = true : x.isActive = false;
        }
      });
      var activeFilters = state.filterGroup1.filter(function (value) {
        return value.isActive === true;
      }); //aktif olan her filtre için tüm liste dolanıp, eşleşenlerle yeni listeye atancak.

      activeFilters.map(function (x) {
        return filteredArr = currentArr.filter(function (value) {
          return value.category.categoryid === x.categoryid;
        });
      });
      state.productList = filteredArr; //productListSlicer.caseReducers.sortingPrice(state, action);
    },
    sortingPrice: function sortingPrice(state, action) {
      var order = "asc";
      var sortState = state.sorting;
      var arr = state.productList;

      switch (order) {
        case "asc":
          arr.sort(function (a, b) {
            return a.price - b.price;
          });
          state.productList = arr; //sort state update

          sortState.sortName = "sortingPrice";
          sortState.sortType = "asc";
          sortState.isActive = true;
          state.sorting = sortState;
          break;

        case "desc":
          arr.sort(function (a, b) {
            return b.price - a.price;
          });
          state.productList = arr; //sort state update

          sortState.sortName = "sortingPrice";
          sortState.sortType = "desc";
          sortState.isActive = true;
          state.sorting = sortState;
          break;

        default:
          break;
      }
    },
    sortingName: function sortingName(state, action) {
      var order = "desc";
      var arr = state.productList;

      switch (order) {
        case "asc":
          arr.sort(function (a, b) {
            if (a.title < b.title) {
              return -1;
            }

            if (a.title > b.title) {
              return 1;
            }

            return 0;
          });
          state.productList = arr;
          break;

        case "desc":
          arr.sort(function (a, b) {
            if (a.title < b.title) {
              return 1;
            }

            if (a.title > b.title) {
              return -1;
            }

            return 0;
          });
          state.productList = arr;
          break;

        default:
          break;
      }
    },
    filterOptimizer: function filterOptimizer(state, action) {}
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