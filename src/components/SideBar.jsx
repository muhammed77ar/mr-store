import { useContext } from "react"
import { SideBarContext } from "../context/SideBarContext"
import { IoArrowForwardOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import CartItems from "../components/CartItems";
import { IoTrashSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


export default function SideBar() {
  const {open, handelClose} = useContext(SideBarContext)
  const {Cart, clearCart, total} = useContext(CartContext)
  return (
    <div className={`${open ? "right-0" : "-right-full"} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[50vw] xl:w-[30vw] transition-all duration-500 z-20 px-0 lg:px-[35px]`}>
      <div className=" w-full h-14 flex justify-between items-center py-5 border-b shadow-md px-4">
        <div className=" capitalize font-semibold">Shoping Cart ({Cart.length})</div>
        <div className=" cursor-pointer w-8 h-7 flex justify-center items-center">
          <IoArrowForwardOutline onClick={handelClose} className=" text-3xl" />
        </div>
      </div>
      <div className="max-h-[60%] overflow-y-auto">{Cart.map((item) =>{
        return <CartItems key={item.id} item={item} />
      })}
      </div>
      <div className=" flex flex-col gap-y-3 py-4 ">
        <div className=" w-full flex justify-between items-center px-4 py-2">
          <div className=" font-semibold text-xl text-green-700">
            <span>Total: </span>${parseFloat(total).toFixed(2)}
          </div>
          <div className="cursor-pointer w-9">
            <IoTrashSharp onClick={clearCart} className=" text-4xl text-red-600"/>
          </div>
        </div>
        <div className=" px-3">
          <Link to={"/"} onClick={handelClose} className=" bg-black flex justify-center items-center no-underline rounded-md p-3 text-xl text-white w-full">View Carts</Link>
        </div>
      </div>
    </div>
  )
}
