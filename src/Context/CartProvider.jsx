import { createContext, useState } from "react";



export const CartContext = createContext()

const CartProvider = (props) => {

    const [cartState,setCartState] = useState(false)
    
    let cart = [];

    const cartTrue = () =>{
        setCartState(true)
    }

    const cartFalse = () =>{
        setCartState(false)
    }

    return(

        <CartContext.Provider value={{cartState, setCartState, cart, cartTrue, cartFalse}}>
            {props.children}
        </CartContext.Provider>

    )
}

export default CartProvider