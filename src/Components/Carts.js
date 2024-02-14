import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearItem } from "../Utils/cartSlice";
import ItemList from "./ItemList";

const Carts = () =>{

    const cartItems = useSelector((store)=>{
        store.cart.items;
    }) 
     const dispatch = useDispatch()

     const handleClearCart = ()=>{
        dispatch(clearItem());
     }
    return(
        <div>
            <h4>Carts</h4>
            <ItemList items = {cartItems} />
        </div>
    )
}

export default Carts;