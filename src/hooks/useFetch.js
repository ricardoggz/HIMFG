import { useState, useEffect } from "react"
import axios from "axios"

export const useFetch = ({url})=>{
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const getData = async()=>{ 
        try {
            const response = await axios.get(url)
            if(response.status === 200){
                setData(response.data)
                setIsLoading(!isLoading)
            }
        } catch (error) {
            throw new Error(error)
        }
    }
    useEffect(()=>{
        getData()
    },[])

    return {data, isLoading}
}