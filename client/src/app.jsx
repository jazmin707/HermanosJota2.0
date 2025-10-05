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

  const total = cart.reduce((acc, item) => acc + (item.precio || item.coste || 0), 0);

  return (
    <div className="App">
      <Navbar cartCount={cart.length} />

      <button onClick={toggleCart} className="boton">
        {showCart ? "Cerrar carrito" : "Ver carrito"}
      </button>


      {showCart && (
        <div className="carrito-items">
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
        <>
        {cart.map((item, index) => (
          <div key={index} className="item-carrito">
            <div className="item-info">
              <p><strong>{item.nombre || item.titulo || "Sin nombre"}</strong></p>
              <p>${item.precio || item.coste || "?"}</p>
            </div>
            <div className="controles">
              <button onClick={() => handleRemoveFromCart(index)}>🗑</button>
            </div>
          </div>
        ))}
        <div className="carrito-footer">
          <p>Total: <span>${cart.reduce((acc, item) => acc + (item.precio || item.coste || 0), 0)}</span></p>
          <button className="boton-comprar botones">Finalizar compra</button>
        </div>
        </>
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
