import axios from "axios";
import { useReducer } from "react";
import { ERROR_PRODUCTS, URL_PRODUCTS } from "../../constants";
import {GET_PRODUCTS} from "../../constants";
import ProductReducer from "./ProductsReducer";
import ProductContext from "./ProductsContext";

const ProductsState = ({ children }) => {
  const initialState = {
    products: [],
    productsError: "",
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    try {
      const response = await axios.get(URL_PRODUCTS);
      dispatch({
        type: GET_PRODUCTS, 
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ERROR_PRODUCTS,
      });
    }
  };

//   const deleteProduct = async (id) => {
//     try {
//       await axios.delete(URL_PRODUCTS + id);
//       dispatch({
//         type: DELETE_PRODUCT,
//         payload: id
//       });
//     } catch (error) {
//       dispatch({
//         type: ERROR_PRODUCTS,
//       });
//     }
//   };

//   const addProduct = async (data) => {
//     try {
//       await axios.post(URL_PRODUCTS, data);
//       dispatch({    
//         type: ADD_PRODUCT,
//         payload: data
//       });
//     } catch (error) {
//       dispatch({
//         type: ERROR_PRODUCTS,
//       });
//     }
//   };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        productsError: state.productsError,
        getProducts,
        // deleteProduct,
        // addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsState;
