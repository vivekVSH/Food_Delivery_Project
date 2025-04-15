import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContex = createContext(null)

const StoreContexProvider = (props) => {

    const contextValue = {
        food_list
    }
    return(
        <StoreContex.Provider value={contextValue}>
            {props.children}
        </StoreContex.Provider>
    )
}

export default  StoreContexProvider;