import { useEffect, useState } from "react";
import { Product } from "../Models/Products";
import { ProductCard } from "./ProductCard";
import { SelectedProduct } from "../Services/FetchOrdersPost";

interface ListProductsProps {
    onSelectedProductsChange: (selectedProducts: SelectedProduct[]) => void;
    filteredMenu: "Breakfast" | "All Day Menu";
}
export const ListProducts = ({ onSelectedProductsChange, filteredMenu }: ListProductsProps) => {
      const token = localStorage.getItem("token");
      const [products, setProducts] = useState<Product[]>([]);
      const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
      const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);

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
            //   const menuBreakfast = data.filter((product: Product) => product.menu === "Breakfast");
              setProducts(data);
            };
            fetchProducts();
          }, []);
useEffect(() =>{
    const filtered = products.filter((product: Product) => product.menu === filteredMenu);
    setFilteredProducts(filtered);
} , [filteredMenu, products])

    const handleQtyChange = (product: Product, qty: number) => {
        setSelectedProducts((selection) => {
            const existingProduct = selection.findIndex(
                (p) => p.product.id === product.id
            );
            let totalSelection; 

            if (existingProduct >= 0) {
                totalSelection = [...selection];
                totalSelection[existingProduct].qty = qty;
                console.log("Productos seleccionados:", totalSelection);
                return totalSelection

            }
            totalSelection = [...selection, { qty, product }]
            console.log(totalSelection)
            
            return totalSelection
            
        })

    };      useEffect(() => {
            onSelectedProductsChange(selectedProducts);
            console.log("total:",selectedProducts)
        }, [selectedProducts,onSelectedProductsChange]);
    
    return (
        <div className="product-list">
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onQtyChange={handleQtyChange} />
            ))}
        </div>
    );
};
