import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../Utils/Constants";
import Shimmer from "./Shimmer";
import useRestaurnantMenu from "../Utils/useRestaurnantMenu";
import RestaurnantCategories from "./RestaurnantCategories";

const RestaurantMenu = ()=>{

  const {resId} = useParams();

  const resInfo = useRestaurnantMenu(resId);
  const[buttonClick,setButtonClick] = useState(null);
  

   
   if(resInfo === null) return <Shimmer />;

  
   const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
   const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e)=>
   e.card?.card?.itemCards)
   const resCategories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
   c.card?.["card"]?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)
  //let ar = resCategories.map((e)=>e.card?.card?.itemCards)
 //console.log(resCategories[0].card?.card?.itemCards[0]?.card?.info?.name)
 //console.log(ar)
 //resCategories.map(ar.map((e)=>console.log(e.card?.info?.name)));
 
 
  function myFunction()
  {
    return
    (
        <h3>t</h3>
    )
  }
    return (
        <div className="menus">
            <h1>{name}</h1>
            <h3>{cuisines}</h3>
            <h3>{costForTwoMessage}</h3>
            
            <h3 className="categories">
                {resCategories.map((resCat,index)=>(
                  /*  <ul className="eachCategory">{e.card?.card?.title   }
                    <button className="categoryButton" onClick="myFunction()">Items!!!</button>
                     <li className="itemDetails">{
                        e.card?.card?.itemCards.map((g)=>
                        (
                            <h3>{g.card?.info?.name}</h3>
                        ))
                        }</li>
                    </ul>*/
                    //console.log("Index: "+index)
                    <RestaurnantCategories 
                    key = {resCat.card?.card?.title}
                    data = {resCat.card?.card}
                    showItems = {index == buttonClick ? true:false }
                    setButtonClick = {()=>setButtonClick(index)}
                    
                    />

                ))}
            </h3>
               
         
        </div>
        
    )
}
export default RestaurantMenu;