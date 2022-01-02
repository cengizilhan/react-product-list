import { createSlice, current } from '@reduxjs/toolkit'
let productArr = require("../data.json");
let categoriesArr = require("../category.json");
let categoriesArrv2 = categoriesArr.map(obj => ({ ...obj, isActive: false }))//add new property to array for filter

//let uniqFilterArr = [...new Set(productArr.map(x => x.category))];
//let uniqFilterArr = [...new Map(productArr.map(item => [JSON.stringify(item.category), item.category])).values()];



export const productListSlicer = createSlice({
  name: 'filter',
  initialState: {
    value: 0,
    productList: productArr,
    filterGroup1: categoriesArrv2,//Categories
    pagination: {
      rowsPerPage: 1,
      count: 1,
      totalPages: 5 //Math.ceil(count / rowsPerPage)
    },
    sorting:
    {
      sortName: "sortingPrice",
      sortType: "asc",
      isActive: false
    },
    setFilter: "",
    searchKey: ""
  },
  reducers: {
    filterrun: (state, action) => {
      let querySelected = parseInt(action.payload['payload'])
      let currentArr = state.productList;
      let filteredArr=state.productList;

      let testarr = state.filterGroup1;
      // filtre ayarlancak
      state.filterGroup1.map((x => {
        if (x.categoryid === querySelected) {
          alert("s");
          filteredArr = currentArr.filter(function (value) {
            return value.category.categoryid === querySelected;
          })

        }
      }))

      state.productList = filteredArr;
      //productListSlicer.caseReducers.sortingPrice(state, action);
    },
    sortingPrice: (state, action) => {
      let order = "asc";
      let sortState = state.sorting;
      let arr = state.productList;
      switch (order) {
        case "asc":
          arr.sort(function (a, b) { return a.price - b.price });
          state.productList = arr;
          //sort state update
          sortState.sortName = "sortingPrice";
          sortState.sortType = "asc";
          sortState.isActive = true;
          state.sorting = sortState;


          break;
        case "desc":
          arr.sort(function (a, b) { return b.price - a.price });
          state.productList = arr;
          //sort state update
          sortState.sortName = "sortingPrice";
          sortState.sortType = "desc";
          sortState.isActive = true;
          state.sorting = sortState;
          break;
        default:

          break;
      }
    },
    sortingName: (state, action) => {
      let order = "desc";
      let arr = state.productList;
      switch (order) {
        case "asc":
          arr.sort(function (a, b) {
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }
            return 0;
          })
          state.productList = arr;
          break;
        case "desc":
          arr.sort(function (a, b) {
            if (a.title < b.title) { return 1; }
            if (a.title > b.title) { return -1; }
            return 0;
          })
          state.productList = arr;
          break;
        default:
          break;
      }
    },
    filterOptimizer: (state, action) => {
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
  },
})

// Action creators are generated for each case reducer function
export const { filterrun } = productListSlicer.actions

export default productListSlicer.reducer