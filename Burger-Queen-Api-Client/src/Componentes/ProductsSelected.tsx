import { useLocation } from "react-router-dom";
import { Product } from "../Models/Products";
import { Background } from "./Background";

export const ProductsSelected = () => {
    const clientName = localStorage.getItem("customerName");
    const location = useLocation();
    const { selectedProducts } = location.state;
    const products = selectedProducts
 console.log("products",products)

 let totalPrice = 0;
selectedProducts.forEach(({ qty, product }:{ qty:number, product:Product }) => {
  totalPrice += qty * product.price;
});

    return (
        <Background  style={{ backgroundColor: '#fff6de', display: 'flex', justifyContent:'center', alignItems:'flex-start' }}>
        <section className="listOrder">
            <div className="order-header">
            <b>CLIENT NAME</b> &nbsp;&nbsp; 
            {clientName ? clientName.toUpperCase() : 'NOMBRE NO DISPONIBLE'}
            </div>
            <h2>PRODUCTS</h2>
            <section className="order-products">
                <table>
                <tbody>
                    {selectedProducts.map(({ qty, product }:{ qty:number, product:Product }) => (
                        <tr key={product.id}>
                        <th>{qty}</th>
                        <th>X</th>
                        <th>{product.name}</th>
                        <th className="productPrice">{product.price}</th>
                    </tr>
                    ))}
                     </tbody>
                    
                </table>
            </section>
            <h2>TOTAL</h2>
            <div>{totalPrice}</div>

        </section>
        </Background>

    );
};

