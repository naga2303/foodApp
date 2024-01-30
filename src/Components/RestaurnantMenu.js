import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{
    const [restInfo, setRestInfo] = useState(null);
    
    useEffect (()=>{
        fetchMenu();
    },[])
    const params = useParams();
    
    const fetchMenu = async ()=>{
        const swiggyURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId=${params.resId}&catalog_qa=undefined&submitAction=ENTER`;
        const data = await fetch(swiggyURL)
        const json = await data.json()
        console.log(json)
        setRestInfo(json)

       
    }
   // const {info}= restInfo?.data?.cards[0]?.card?.card;
   console.log(restInfo)

    return (
        
        <div className="resMenu">
            <h1>{info}</h1>
        </div>
        
    )
}
export default RestaurantMenu;