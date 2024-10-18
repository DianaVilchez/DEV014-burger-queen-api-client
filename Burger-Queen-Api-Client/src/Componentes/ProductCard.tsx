import { useState } from "react";

export const ProductCard = ({ name, img }: { name: string; img: string }) => {
    const [count, setCount] = useState(0);
    const handleMore = () =>{
        setCount(count + 1)
    }
    const handleLess = () =>{
        if (count > 0) {
        setCount(count - 1)
        }
    }
    // const handleAmount = () =>{
    //     setCount
    // }
    return (
        <div className="product-card">
            <div className="buttonsShop">
                <div className="buttonAmount" >{count}</div>
                <div className="buttonMore" onClick={handleMore}>+</div>
                <div className="buttonLess" onClick={handleLess}>-</div>
            </div>
            <img src={img} alt={name} />
            <h3>{name}</h3>
        </div>
    );
};