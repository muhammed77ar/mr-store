import {Link} from "react-router-dom"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiCircleMinus, CiCirclePlus} from "react-icons/ci";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItems({item}) {
  const {removeItem, increment, decrement} = useContext(CartContext)
  return (
    <div className="flex gap-x-4 py-2 border-b">
      <div className=" w-full min-h-[150px] flex items-center gap-x-4 px-4">
        <Link to={`/product/${item.id}`}>
          <img className=" max-w-[80px]" src={item.image} alt="" />
        </Link>
        <div className=" w-full flex flex-col">
          <div className=" flex justify-between mb-2">
            <Link to={`/product/${item.id}`} className=" no-underline text-black font-medium">{item.title}</Link>
            <div className="">
              <IoIosCloseCircleOutline onClick={()=>removeItem(item.id)} className=" text-3xl hover:text-red-600 transition-all duration-200 cursor-pointer " />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] items-center justify-between">
            <div className=" flex justify-between items-center gap-x-2 p-1">
              <CiCircleMinus onClick={()=> decrement(item.id)} className=" text-3xl flex-1 flex justify-center items-center cursor-pointer hover:text-red-600 transition-all duration-200" />
              <div className=" flex-1 font-normal text-xl flex justify-center items-center">{item.amount}</div>
              <CiCirclePlus onClick={()=> increment(item.id)} className=" text-3xl flex-1 felx justify-center items-center cursor-pointer hover:text-green-600 transition-all duration-200" />
            </div>
            <div className=" text-green-600">${item.price}</div>
            <div className=" text-green-800 font-semibold text-xl">{`$ ${parseFloat(item.price * item.amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
