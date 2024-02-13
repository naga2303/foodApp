import ResCards from "./ResCards";
import ResList from "../Utils/MockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () =>{

    
    const [listofRestaurants,setListofRestaurant] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText,setsearchText] = useState("");
    useEffect(()=>{
        fetchData();
    },[])

 /*   useEffect(()=>{
        const handleScroll = () =>{
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.offsetHeight;
            if(scrollY+windowHeight+documentHeight - 250){
                fetchMoreData();
            }
        };
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[]);

    const handleScroll =()=>{
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.offsetHeight;
        if(scrollY+windowHeight+documentHeight - 250){
            fetchMoreData();
        }
    }

    

    const fetchMoreData = async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/update',{
             method: 'POST',
                body: JSON.stringify({"filters":{},"lat":13.1067448,"lng":80.0969511,"nextOffset":"COVCELQ4KICYwIHD6MO4RjCnEzgE","widgetOffset":{"NewListingView_category_bar_chicletranking_TwoRows":"","NewListingView_category_bar_chicletranking_TwoRows_Rendition":"","Restaurant_Group_WebView_PB_Theme":"","Restaurant_Group_WebView_SEO_PB_Theme":"","collectionV5RestaurantListWidget_SimRestoRelevance_food_seo":"10","inlineFacetFilter":"","restaurantCountWidget":""},})
        });
        const json = await data.json()
        console.log(json)
        setListofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }*/

    const fetchData = async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1067448&lng=80.0969511&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json()
        console.log(json)
        setListofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return (
        
        <div className="body">
             <input type="text" className="searchBox border border-black m-2 p-2" value={searchText} onChange={(e)=>{
            setsearchText(e.target.value)
             console.log("Search Text: "+searchText)          
         }}>
         </input>

         <button className="searchMe m-2 border bg-blue-200 p-2 rounded-lg hover:bg-slate-500" onClick={()=>{
            const filteredRestaurant = listofRestaurants.filter((res)=>
            res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurant(filteredRestaurant)
         
            
            }}>FindME!
        </button>
            <button className="topRated m-2 p-2 bg-blue-200 rounded-lg hover:bg-slate-500" onClick={()=>{
                const filteredRestaurant = listofRestaurants.filter((res)=>
                res.info.avgRating>4)
                setFilteredRestaurant(filteredRestaurant)
            }}>
                Top Rated Restaurnants
            </button>

            <button className="onlyAvadi m-2 p-2 bg-blue-200 rounded-lg hover:bg-slate-500" onClick={()=>{
                const filteredRestaurant = listofRestaurants.filter((res)=>
                res.info.areaName == "Ambattur")
                setFilteredRestaurant(filteredRestaurant)
            }}>
                AVADI
            </button>

            <button className="clear m-2 p-2 bg-blue-200 rounded-lg hover:bg-slate-500" onClick={()=>{
                 const filteredRestaurant = listofRestaurants
                 setFilteredRestaurant(filteredRestaurant)
            }}>Clear</button>

            
            <div className="cards flex flex-wrap">
               {
                
                 filteredRestaurant.map((restaurnant) =>(
                    <Link
                    key ={restaurnant.info.id}
                    to={"/restaurnants/"+restaurnant.info.id}>
                    <ResCards  resData = {restaurnant} />
                    </Link>
                 ))
                 
               }
             

            </div>

           
        </div>
    )
}

export default Body;

//