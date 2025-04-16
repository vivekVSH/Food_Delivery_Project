import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContex = createContext(null)

const StoreContexProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=> {
        console.log(cartItems); 
    },[cartItems])

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        setCartItems,
        removeFromCart
    }
    return(
        <StoreContex.Provider value={contextValue}>
            {props.children}
        </StoreContex.Provider>
    )
}

export default  StoreContexProvider;