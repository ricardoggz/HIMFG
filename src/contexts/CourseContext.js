import { createContext, useState } from "react"
import { setItem, getItem, removeItem } from "@/helpers"
export const CourseContext = createContext()

export const CourseProvider = ({ children })=>{
    const [course, setCourse] = useState(null)
    const login = (course)=>{
        setItem('course', course)
        setCourse(getItem('course'))
    }
    const logout = ()=> {
        removeItem('course')
        setCourse(null)
    }
    return(
        <CourseContext.Provider value={{login, logout, course}}>
            { children }
        </CourseContext.Provider>
    )
}