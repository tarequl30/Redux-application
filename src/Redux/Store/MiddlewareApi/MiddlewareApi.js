// import axios from "axios";
// // import URL from "../configs/api_endpoints"
// import * as actions from "./ApiAction";
// const URL = "https://fakestoreapi.com";

// const api =
//   ({ dispatch }) =>
//   (next) =>
//   async (action) => {
//     if (action.type !== actions.apiCallBegan.type) return next(action);

//     const { url, method, data, onStart, onSuccess, onError } = action.payload;
//     if (onStart) dispatch({ type: onStart });
//     next(action);

//     try {
//       const response = await axios.request({
//         baseURL: URL,
//         url,
//         method,
//         data,
//       });
//       dispatch(actions.apiCallSuccess(response.data));
//       if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
//     } catch (error) {
//       dispatch(actions.apiCallFailed(error.message));
//       if (onError) dispatch({ type: onError, payload: error.message });
//     }
//   };

// export default api;
