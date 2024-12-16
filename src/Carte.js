import React from 'react';

function Carte({ cartItems, removeFromCart, incrementQuantity, decrementQuantity, toggleCartVisibility }) {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <button className="close-cart" onClick={toggleCartVisibility}>X</button>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div>{item.name}</div>
                            <div>
                                <button onClick={() => decrementQuantity(item)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => incrementQuantity(item)}>+</button>
                            </div>
                            <div>{item.quantity} x ${item.price}</div>
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
}

export default Carte;
