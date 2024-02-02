import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../Utils/Constants";
import Shimmer from "./Shimmer";
import useRestaurnantMenu from "../Utils/useRestaurnantMenu";

const RestaurantMenu = ()=>{

  const {resId} = useParams();

  const resInfo = useRestaurnantMenu(resId);

   
   if(resInfo === null) return <Shimmer />;

  console.log("RESTINFO: "+resInfo)
   //const {name} = resInfo?.data?.cards[0]?.card?.card?.info;
   const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
   const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   const resCategories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
   c.card?.["card"]?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)
 console.log(resCategories)
    //console.log(itemList)
    //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.categories);
   // const itemList1 = itemList;
  
    return (
        <div className="menus">
            <h1>{name}</h1>
            <h3>{cuisines}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}>
                        {item.card.info.name}</li>
                ))}
            </ul>
               
         
        </div>
        
    )
}
export default RestaurantMenu;