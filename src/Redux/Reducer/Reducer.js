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
        isLoadProduct: false,
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
    case "REMOVE_TO_CARD": {
      const newCard = {
        ...state,
        addToCard: state.addToCard.filter((pd) => pd.id !== action.payload),
      };
      return newCard;
    }
    default: {
      return state;
    }
  }
};
export default productReducer;
