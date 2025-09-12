import { useContext } from "react";
import { ProductContext } from "./ProductsContext";

export const UseProduct = () => {
    return useContext(ProductContext);
}
