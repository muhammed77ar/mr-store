import { useDispatch} from "react-redux"
import axios from "axios"
import ProductComponent from "./productComponent"
import { useEffect } from "react"
import { setProduct } from "../redux/actions/ProductAction"

export default function ProductListing() {
    const dispatch = useDispatch()
    const fetchProduct = async () =>{
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((error) => {console.log(error)}) 
        dispatch(setProduct(response.data))
    }
    useEffect(() => {
        fetchProduct()
    }, [])

  return <div className="content" style={{ paddingTop: "100px" }}>
    <div className="ui container">
        <ProductComponent />
    </div>
    </div>
}
