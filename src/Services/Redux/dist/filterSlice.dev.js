"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.sortingPrice = exports.sortingName = exports.filterrun = exports.productListSlicer = void 0;

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
  name: "filter",
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
      //Click event e.value to variable.
      var querySelected = parseInt(action.payload["payload"]); // set  isActive state  when click checkbox

      state.filterGroup1.map(function (x) {
        if (x.categoryid === querySelected) {
          x.isActive === false ? x.isActive = true : x.isActive = false;
        }
      });
      var filteredArr = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = productArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var x = _step.value;
          var productCategory = x.category.categoryid;
          var filters = (0, _toolkit.current)(state.filterGroup1);

          if (productCategory === filters[productCategory].categoryid && filters[productCategory].isActive === true) {
            filteredArr.push(x);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      filteredArr.length === 0 ? state.productList = productArr : state.productList = filteredArr;
      console.log("active before");
      console.warn(state.sorting.isActive);

      if (state.sorting.isActive) {
        console.log("active");
        action = state.sorting.sortType; //sorting type from state

        switch (state.sorting.sortName) {
          case "sortingName":
            console.log("sorting name");
            productListSlicer.caseReducers.sortingName(state, action);
            break;

          case "sortingPrice":
            console.log("sorting price");
            productListSlicer.caseReducers.sortingPrice(state, {
              payload: "asc"
            }); //payload doğru gitmediği için çalışmıyor. düzenlencek.
            //

            break;

          default:
            break;
        }
      } //productListSlicer.caseReducers.sortingPrice(state, action);

    },
    sortingOrganiser: function sortingOrganiser(state, action) {
      console.warn(action);
    },

    /* """" sorting name'lerde property active edilecek*/
    sortingPrice: function sortingPrice(state, action) {
      console.log("work price");
      var order = action.payload["payload"];
      var sortState = state.sorting;
      var arr = state.productList;

      switch (order) {
        case "asc":
          arr.sort(function (a, b) {
            return a.price - b.price;
          });
          console.warn("sorging price asc");
          state.productList = arr; //sort state update

          sortState.sortName = "sortingPrice";
          sortState.sortType = "asc";
          sortState.isActive = true;
          state.sorting = sortState;
          /* bu olcak.
          sıralama tek reducerde olcak.
          
           sortState = {
             sortName: "string",
             sortType: "string",
             isActive: "boolean",
           };
           */

          break;

        case "desc":
          arr.sort(function (a, b) {
            return b.price - a.price;
          });
          console.warn("sorging price desc");
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
      var order = action.payload["payload"];
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
var _productListSlicer$ac = productListSlicer.actions,
    filterrun = _productListSlicer$ac.filterrun,
    sortingName = _productListSlicer$ac.sortingName,
    sortingPrice = _productListSlicer$ac.sortingPrice;
exports.sortingPrice = sortingPrice;
exports.sortingName = sortingName;
exports.filterrun = filterrun;
var _default = productListSlicer.reducer;
exports["default"] = _default;