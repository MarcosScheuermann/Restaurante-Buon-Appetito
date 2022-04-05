import axios from "axios";
import { useReducer } from "react";
import ProductReducer from "./ProductsReducer";
import ProductContext from "./ProductsContext";
import { ERROR_PRODUCTS, GET_PRODUCTS, URL_PRODUCTS } from "../../constants";


const ProductsState = ({children}) => {
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

  // const deleteProduct = async (id) => {
  //   try {
  //     await axios.delete(URL_PRODUCTS + id);
  //     dispatch({
  //       type: DELETE,
  //       payload: id
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: ERROR_PRODUCTS,
  //     });
  //   }
  // };

  // const addProduct = async (data) => {
  //   try {
  //     await axios.post(URL_PRODUCTS, data);
  //     dispatch({    
  //       type: ADD_PRODUCT,
  //       payload: data
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: ERROR_PRODUCTS,
  //     });
  //   }
  // };

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
