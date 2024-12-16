import React, { useState } from 'react';
import Product from './Product';
import Cart from './Carte';
import './App.css';

function App() {
    const products = [
        {
            id: 1,
            name: "Laptop",
            description: "High performance laptop.",
            price: 999.99,
            image: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            name: "Smartphone",
            description: "Latest model smartphone.",
            price: 599.99,
            image: "https://via.placeholder.com/150"
        },
        {
            id: 3,
            name: "Headphones",
            description: "Noise-cancelling headphones.",
            price: 199.99,
            image: "https://via.placeholder.com/150"
        }
    ];

    const [cart, setCart] = useState([]);
    const [isCartVisible, setCartVisible] = useState(true); // State for cart visibility

    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(
                cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (product) => {
        setCart(cart.filter(item => item.id !== product.id));
    };

    const incrementQuantity = (product) => {
        setCart(
            cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decrementQuantity = (product) => {
        if (product.quantity > 1) {
            setCart(
                cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            );
        } else {
            removeFromCart(product);
        }
    };

    const toggleCartVisibility = () => {
        setCartVisible(!isCartVisible); // Toggle the visibility of the cart
    };

    return (
        <div className="App">
            <h1>My E-Commerce Store</h1>
            <div className="products">
                {products.map(product => (
                    <Product key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>

            <button className="cart-toggle" onClick={toggleCartVisibility}>
                {isCartVisible ? 'Hide Cart' : 'Show Cart'}
            </button>

            {isCartVisible && (
                <Cart
                    cartItems={cart}
                    removeFromCart={removeFromCart}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                    toggleCartVisibility={toggleCartVisibility} // Pass the toggle function to Cart
                />
            )}
        </div>
    );
}

export default App;
