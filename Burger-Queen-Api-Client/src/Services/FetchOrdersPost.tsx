import { useState } from "react";
import { Product } from "../Models/Products";

export interface SelectedProduct {
    qty: number;
    product: Product;
}
export const useSubmitOrder = () => {

    const [orderData, setOrderData] =
        useState<{ products: SelectedProduct[]; client: string }
            | null>(null);

    const SubmitOrder = async (selectedProducts: SelectedProduct[]) => {
        const orderItems = selectedProducts.map(({ product, qty }) => ({
            qty,
            product: {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                type: product.type,
                dateEntry: product.dateEntry,
            }
        }));
        const response = await fetch("http://localhost:8080/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
                orderItems,
            }),
        });
        if (response.ok) {
            const data = await response.json()
            setOrderData(data);
        } else {
            alert("Error al crear la orden")
            console.error("Error al crear la orden")
        }
    }
    return {orderData,SubmitOrder}
}
