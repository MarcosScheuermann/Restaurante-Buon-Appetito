import { createContext, useState } from "react"


export const ProductsContext = createContext();

export const getProduct = async (id) => {
    try {
      //const { data } = await axiosClient.get(`/products/${id}`);
      //setProduct(data.product);
      const data = await axiosClient.get(`/products/${id}`);
      dispatch(
          {
              type:GETPRODUCT,
              payload:response.data
          }
      )
    } catch (error) {
      //console.log(error);
      dispatch(
          {
              type:REQERROR,
              payload:error.response.data.msg
          }
      )
    }
  };


const ProductsProvider = ({children}) => {

    const [products] = useState ([]);
    
    return ( 
        <ProductsContext.Provider value={{
            products
            
        }}>

            {children}

        </ProductsContext.Provider>
     );
}
 
export default ProductsProvider;

