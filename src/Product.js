import React from 'react';

function Product({ product, addToCart }) {
    return (
        <div className="product">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}

export default Product;
