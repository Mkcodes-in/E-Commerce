import { useContext } from "react"
import { CartContext } from "./CartContext"

export const UseCart = () => {
    return useContext(CartContext);
}