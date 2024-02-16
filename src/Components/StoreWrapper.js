import Header from "./Header";
import { Provider } from "react-redux";
import appStore from "../Utils/appStore";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "./RestaurnantMenu";
import Carts from "./Carts";
import ItemList from "./ItemList";

export const StoreWrapper = () => {
    return (
       
        <BrowserRouter>   <Provider store={appStore}><Header /></Provider></BrowserRouter>
           
    )
}



