import { useState } from 'react'

export const useLocalStorage = ()=>{
    const [value, setValue] = useState(null)
    const setItem = (key, data)=>{
        localStorage.setItem(key, data)
        setValue(data)
    }
    const getItem = (key)=> {
        const value = JSON.parse(localStorage.getItem(key))
        setValue(value)
        return value
    }
    const removeItem = (key)=>{
        localStorage.removeItem(key)
        setValue(null)
    }
    return {value, setItem, getItem, removeItem}
}