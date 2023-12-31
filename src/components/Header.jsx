import { useContext, useState } from "react"
import { SideBarContext } from "../context/SideBarContext"
import { SlHandbag } from "react-icons/sl";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Header() {
  const [active, setActive] = useState(false)
  const {open, setOpen} = useContext(SideBarContext)
  const {itemsAmount} = useContext(CartContext)
  const handelOpen = () =>{
    setOpen(!open)
  }
  window.addEventListener("scroll", () =>{
    window.scrollY > 60 ? setActive(true) : setActive(false)
  })
  return (
    <header className={`${active ? " bg-white shadow-lg" : " bg-none"} fixed w-full z-10 transition-all`}>
        <div className=" container flex items-center justify-between w-full h-full py-2 px-4">
          <Link to={"/"}>
            <div>
              <img src="../images/logo-no-background.svg" className=" w-[80px]" alt="" />
            </div>
          </Link>
          <div onClick={handelOpen} className=" cursor-pointer relative">
          <SlHandbag  className={`text-4xl ${active ? "text-black" : " text-teal-600"} font-semibold`} />
          <div className=" bg-red-500 absolute top-0 -bottom-2 -right-2 w-[20px] text-white h-[20px] flex justify-center items-center rounded-full">{itemsAmount}</div>
        </div>
        </div>
    </header>
  )
}
