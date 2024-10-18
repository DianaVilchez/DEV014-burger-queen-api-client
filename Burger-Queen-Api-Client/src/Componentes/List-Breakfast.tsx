import { useEffect, useState } from "react";
import { Product } from "../Models/Products";
import { ProductCard } from "./ProductCard";

export const ListBreakfast = () => {
    const token = localStorage.getItem("token");
    console.log('token', token)
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("http://localhost:8080/products", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            const menuBreakfast = data.filter((product:Product) => product.menu === "Breakfast");
            setProducts(menuBreakfast);
            console.log(menuBreakfast)
        };
        fetchProducts();
    }, []);
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard name={product.name} img={product.image} />
            ))}
        </div>
    );
};