import { useState } from "react";
import { Product } from "../Models/Products";

// interface ProductCard{
    
//     onQtyChange:(qty:number) => void;
// }
export const ProductCard = ({ product , onQtyChange}: {product:Product, onQtyChange:(product:Product,qty:number)=>void}) => {
    const [count, setCount] = useState(0);
    const handleMore = () =>{
        setCount(count + 1)
        onQtyChange(product, count + 1)
    }
    const handleLess = () =>{
        if (count > 0) {
        setCount(count - 1)
        onQtyChange(product,count - 1)

        }
    }
    return (
        <div className="product-card">
            <div className="buttonsShop">
                <div className="buttonAmount" >{count}</div>
                <div className="buttonMore" onClick={handleMore}>+</div>
                <div className="buttonLess" onClick={handleLess}>-</div>
            </div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>

        </div>
    );
};