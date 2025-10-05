import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} />

      <button onClick={toggleCart} className="toggle-cart-btn">
        {showCart ? "Cerrar carrito" : "Ver carrito"}
      </button>

      {showCart && (
        <div className="cart">
          <h3>Carrito</h3>
          {cart.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.nombre} - ${item.precio}
                  <button onClick={() => handleRemoveFromCart(index)}>Eliminar</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          onAddToCart={handleAddToCart}
          onBack={() => setSelectedProduct(null)}
        />
      ) : (
        <ProductList onProductClick={handleProductClick} />
      )}

      <Footer />
      <ContactForm />
    </div>
  );
}
