import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../Utils/Constants";
import Shimmer from "./Shimmer";
import useRestaurnantMenu from "../Utils/useRestaurnantMenu";

const RestaurantMenu = ()=>{

  const {resId} = useParams();

  const resInfo = useRestaurnantMenu(resId);

   
   if(resInfo === null) return <Shimmer />;

//   console.log("RESTINFO: "+resInfo)
   //const {name} = resInfo?.data?.cards[0]?.card?.card?.info;
   const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    return (
        
        <div className="resMenu">
            <h1>{name}</h1>
        </div>
        
    )
}
export default RestaurantMenu;