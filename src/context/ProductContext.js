import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const ProductContext = createContext()

export default function ProductProvider({children}) {

    const [products, setProducts] = useState([])

    const FetchProduct = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((error) => {console.log(error)})
        const data =  response.data
        setProducts(data)
    }
    useEffect(() =>{
        FetchProduct()
    }, [])


  return <ProductContext.Provider value={{products}}>
    {children}
  </ProductContext.Provider>
}
