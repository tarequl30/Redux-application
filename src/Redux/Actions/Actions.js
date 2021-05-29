//
export const loadProduct = (payload) => {
  return (dispatch, getState) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        dispatch({
          type: "LOAD_PRODUCT",
          payload: products,
        });
      });
  };
};

export const addToCard = (payload) => {
  return {
    type: "ADD_TO_CARD",
    payload,
  };
};
