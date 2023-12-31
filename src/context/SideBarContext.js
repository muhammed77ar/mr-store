import { createContext, useState } from "react"

export const SideBarContext = createContext()

export default function SideBarProvider({children}) {
    const [open, setOpen] = useState(false)
    const handelClose = () =>{
        setOpen(false)
    }
  return (
    <SideBarContext.Provider value={{
        open,
        setOpen,
        handelClose
    }}>
        {children}
    </SideBarContext.Provider>
  )
}
