import { useContext } from "react";
import { BsEyeFill  } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Product({product}) {
  const {addToCart} = useContext(CartContext)
  const {id} = product
  return (
    <div className=" mt-20">
      <div className=" border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img src={product.image} className=" max-h-[160px] group-hover:scale-125 transition duration-300" alt="" />
          </div>
        </div>
        <div className=" absolute top-4 -right-16 group-hover:right-4 transition-all duration-200 p-2 drop-shadow-2xl flex flex-col items-center justify-between 
        gap-y-2 ">
          <button onClick={() => addToCart(product, id)}>
            <div className=" flex justify-center items-center bg-blue-600 rounded-full text-white w-12 h-12">
              <GoPlus className=" text-3xl"/>
            </div>
          </button>
          <Link to={`/product/${product.id}`} className=" w-12 h-12 bg-white flex justify-center rounded-full items-center text-xl">
          <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <div className=" capitalize text-gray-500 font-medium">{product.category}</div>
        <Link to={`/product/${product.id}`} className=" no-underline">
          <h5 className=" font-semibold my-1 text-black">{product.title}</h5>
        </Link>
        <div className=" text-green-600 font-bold">${product.price}</div>
      </div>
    </div>
  )
}
