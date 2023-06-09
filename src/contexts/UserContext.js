import { createContext, useState } from "react"
import { setItem, getItem, removeItem } from "@/helpers"
export const UserContext = createContext()

export const UserProvider = ({ children })=>{
    const [user, setUser] = useState(null)
    const login = (user)=>{
        setItem('user', user)
        setUser(getItem('user'))
    }
    const logout = ()=> {
        removeItem('user')
        setUser(null)
    }
    return(
        <UserContext.Provider value={{login, logout, user}}>
            { children }
        </UserContext.Provider>
    )
}