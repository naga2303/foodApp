import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../Utils/Constants";
import Shimmer from "./Shimmer";
import useRestaurnantMenu from "../Utils/useRestaurnantMenu";
import RestaurnantCategories from "./RestaurnantCategories";

const RestaurantMenu = ()=>{

  const {resId} = useParams();

  const resInfo = useRestaurnantMenu(resId);
  const[buttonClick,setButtonClick] = useState(0);
  

   
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

/**
 * Here, the showItems is defined because of the below scenario.
 * If one accordian is expanded then other should be collapsed, if we use the useState in the Restaurant category, then eact category will have its own state.
 * To over come this, the power expand and collapse provided to restaurant menu, so that it can handle. 
 * here the index means the nth of accordian. 
 * The Restaurant category is a controlled component, it is controlled via props from the restaurant menu page. 
 * const[buttonClick,setButtonClick] = useState(0); = This particular statement is for expanding the accordian using index. Here, the 0 means the first one will be expanded. 
 * setButtonClick() - It is a function which will be called for every click on the expanded button. Each accordian will have this function. (Refer react dev tools).
 * setButtonClick = {()=>setButtonClick(index)} - This function is very important, it will get the index of the click which is made on accordian,
 * Using this index, the clicked accordian will expand and others will collapse.
 * Props drilling - passing data from parent to child. ex: restaurnantCategories to restaurantMenu to Itemlist. A data needs to read by itemList which is 
 * defined in the restaurantCategory. (props drillling should be avoided)
 * 
 * 
 

*/