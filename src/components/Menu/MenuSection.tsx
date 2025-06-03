import ProductBar from "@/components/Menu/products/ProductBar";
import ProductList from "./products/ProductList";
import ShoppingCart from "./products/ShoppingCart";
//import {ShoppingCart} from "lucide-react";

export default function MenuSection() {
    return (
        <div className="flex max-w-7xl mx-auto mt-10 px-4 gap-6">
            <ProductBar/>
            <ProductList/>
            <ShoppingCart/>
        </div>
    );
}
