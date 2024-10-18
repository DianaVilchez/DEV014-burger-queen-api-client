import { useEffect, useState } from "react";
import { Product } from "../Models/Products";
import { ProductCard } from "./List-Breakfast";

export const ListAllDayMenu = () => {
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
            const menuAllDayMenu = data.filter((product:Product) => product.menu === "All Day Menu");
            setProducts(menuAllDayMenu);
            console.log(menuAllDayMenu)
        };
        fetchProducts();
    }, []);
    return (
        <div className="product-list">
            {products.map((product: Product) => (
                <ProductCard name={product.name} img={product.image} />
            ))}
        </div>
    );
};