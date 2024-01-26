import ResCards from "./ResCards";
import ResList from "../Utils/MockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () =>{

    
    const [listofRestaurants,setListofRestaurant] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText,setsearchText] = useState("");
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1067448&lng=80.0969511&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json()
        console.log(json)
        setListofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return listofRestaurants.length ==0 ?(
        <Shimmer />
    )
    :(
        
        <div className="body">
             <input type="text" className="searchBox" value={searchText} onChange={(e)=>{
            setsearchText(e.target.value)
             console.log("Search Text: "+searchText)          
         }}>
         </input>

         <button className="searchMe" onClick={()=>{
            const filteredRestaurant = listofRestaurants.filter((res)=>
            res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurant(filteredRestaurant)
         
            
            }}>FindME!
        </button>
            <button className="topRated" onClick={()=>{
                const filteredRestaurant = listofRestaurants.filter((res)=>
                res.info.avgRating>4)
                setFilteredRestaurant(filteredRestaurant)
            }}>
                To Rated Restaurnants
            </button>

            <button className="onlyAvadi" onClick={()=>{
                const filteredRestaurant = listofRestaurants.filter((res)=>
                res.info.areaName == "Ambattur")
                setFilteredRestaurant(filteredRestaurant)
            }}>
                only In AVADI
            </button>

            <button className="clear" onClick={()=>{
                 const filteredRestaurant = listofRestaurants
                 setFilteredRestaurant(filteredRestaurant)
            }}>Clear</button>

            <div className="cards">
               {
                
                 filteredRestaurant.map((restaurnant) =>(
                    (<ResCards  resData = {restaurnant} />)
                 ))
                 
               }
               <h1>{console.log("First Loaded")}</h1>

            </div>

           
        </div>
    )
}

export default Body;