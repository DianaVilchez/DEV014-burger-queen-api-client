export const ProductsSelected = () => {
    return (
        <section className="listOrder">
            <section className="order-header">
                
                    <div className="order-code">
                        <span>CODE OF ORDER</span><span>CUSTOMER</span>
                    </div>
                    <div className="customer">
                        <span>codigo</span><span>nombre</span>
                    </div>
                
            </section>
            <h2>PRODUCTS</h2>
            <section className="order-products">
                {/* <div>
                    <span>Cantidad</span>X<span>Nombre</span>
                    <span>CUSTOMER</span><span>nombre</span>
                </div> */}
                <table>
                    <tr>
                        <th>cantidad</th>
                        <th>X</th>
                        <th>nombre</th>
                        <th className="productPrice">$precio</th>
                    </tr>
                    <tr>
                        <th>cantidad</th>
                        <th>X</th>
                        <th>nombre</th>
                        <th className="productPrice">$precio</th>
                    </tr>
                </table>
            </section>
            <h2>TOTAL</h2>
            <div>total</div>

        </section>

    );
};
