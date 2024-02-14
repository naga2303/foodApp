import { configureStore } from "@reduxjs/toolkit";
import cartReduce from "./cartSlice";

const appStore = configureStore({
    reducer :{
        cart: cartReduce,
    },
});

export default appStore;