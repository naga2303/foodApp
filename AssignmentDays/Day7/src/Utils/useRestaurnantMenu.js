import { useState,useEffect } from "react"
import { MENU_API_URL } from "./Constants"


const useRestaurnantMenu = (resId) =>{
    
    const [resInfo,setResInfo] = useState(null)

    useEffect(()=>{
        fetchMenu()
    },[])
     
    const fetchMenu = async ()=>{
          
        const data = await fetch(MENU_API_URL+resId)
        const json = await data.json()
        //await console.log("JSON DATA: "+json)
        setResInfo(json.data)
        console.log(resInfo)
    }

    return resInfo;
}
export default useRestaurnantMenu;