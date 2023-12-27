import { createContext, useState } from "react"
import Navbar from "./navbar"

export const userContext = createContext({
})

export default function UserApp(){
    const [user, setUser] = useState([])
    const [lastid, setLastId] = useState(0)

    const addUser = (data) =>{
        setUser(prevState => [...prevState, data.payload])
        setLastId(prevState => prevState + 1)
        console.log(user)
    }

    return(
        <>
        <userContext.Provider value={{
            users : user,
            lastId : lastid,
            addUser : addUser
        }}>
            <Navbar />
        </userContext.Provider>
        </>
    )

}