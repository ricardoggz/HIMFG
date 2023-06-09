export const setItem = (key, data)=>{
    localStorage.setItem(key, JSON.stringify(data))
}
export const getItem = (key)=> {
    const value = JSON.parse(localStorage.getItem(key))
    return value
}
export const removeItem = (key)=>{
    localStorage.removeItem(key)
}