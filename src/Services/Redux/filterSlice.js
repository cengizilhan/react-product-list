import { createSlice, current } from "@reduxjs/toolkit";
let productArr = require("../data.json");
let categoriesArr = require("../category.json");
let categoriesArrv2 = categoriesArr.map((obj) => ({ ...obj, isActive: false })); //add new property to array for filter

//let uniqFilterArr = [...new Set(productArr.map(x => x.category))];
//let uniqFilterArr = [...new Map(productArr.map(item => [JSON.stringify(item.category), item.category])).values()];

export const productListSlicer = createSlice({
  name: "filter",
  initialState: {
    value: 0,
    productList: productArr,
    filterGroup1: categoriesArrv2, //Categories
    pagination: {
      rowsPerPage: 1,
      count: 1,
      totalPages: 5, //Math.ceil(count / rowsPerPage)
    },
    sorting: {
      sortName: "sortingPrice",
      sortType: "asc",
      isActive: false,
    },
    setFilter: "",
    searchKey: "",
  },
  reducers: {
    filterrun: (state, action) => {
      //Click event e.value to variable.
      let querySelected = parseInt(action.payload["payload"]);

      // set  isActive state  when click checkbox
      state.filterGroup1.map((x) => {
        if (x.categoryid === querySelected) {
          x.isActive === false ? (x.isActive = true) : (x.isActive = false);
        }
      });

      let filteredArr = [];
      for (let x of productArr) {
        var productCategory = x.category.categoryid;
        let filters = current(state.filterGroup1);
        if (
          productCategory === filters[productCategory].categoryid &&
          filters[productCategory].isActive === true
        ) {
          filteredArr.push(x);
        }
      }

      filteredArr.length === 0 ? (state.productList = productArr) : (state.productList = filteredArr);

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
              payload: "asc",
            });
            //payload doğru gitmediği için çalışmıyor. düzenlencek.
            //

            break;

          default:
            break;
        }
      }

      //productListSlicer.caseReducers.sortingPrice(state, action);
    },
    sortingOrganiser: (state, action) => {
      console.warn(action);
    },
    /* """" sorting name'lerde property active edilecek*/
    sortingPrice: (state, action) => {
      console.log("work price");
      let order = action.payload["payload"];
      let sortState = state.sorting;
      let arr = state.productList;
      switch (order) {
        case "asc":
          arr.sort(function (a, b) {
            return a.price - b.price;
          });
          console.warn("sorging price asc");
          state.productList = arr;
          //sort state update
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
      let order = action.payload["payload"];
      let arr = state.productList;
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
    filterOptimizer: (state, action) => { },
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
});

// Action creators are generated for each case reducer function
export const { filterrun, sortingName, sortingPrice } =
  productListSlicer.actions;

export default productListSlicer.reducer;
