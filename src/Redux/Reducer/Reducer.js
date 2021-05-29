const initialState = {
  loadProduct: [],
  addToCard: [],
  isLoadProduct: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PRODUCT": {
      const newState = {
        ...state,
        loadProduct: action.payload,
      };
      return newState;
    }
    case "ADD_TO_CARD": {
      const newCard = {
        ...state,
        addToCard: [...state.addToCard, action.payload],
      };
      return newCard;
    }
    default: {
      return state;
    }
  }
};
export default productReducer;

// const productReducer = createSlice({
//   name: "products",
//   initialState: {
//     products: [],
//     loadingProduct: false,
//     cart: [],
//   },
//   reducers: {
//     productRequested: (state, action) => {
//       state.loadingProduct = true;
//     },
//     productFailed: (state, action) => {
//       state.loadingProduct = false;
//     },
//     productReceived: (state, action) => {
//       state.loadingProduct = false;
//       state.products = action.payload;
//     },
//   },
// });

// const { productFailed, productReceived, productRequested } =
//   productReducer.actions;

// export const loadProducts = () => (dispatch) => {
//   dispatch(
//     apiCallBegan({
//       url: "/products",
//       onStart: productRequested.type,
//       onSuccess: productReceived.type,
//       onError: productFailed.type,
//     })
//   );
// };

// export const IsLoading = (state) => state.addedProduct.loadingProduct;
// export const products = (state) => state.addedProduct.products;
