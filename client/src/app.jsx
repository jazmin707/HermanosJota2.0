// App.js
import React, { useState } from "react"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import ProductDetail from "./components/ProductDetail"
import Footer from "./components/Footer"

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cart, setCart] = useState([])

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div>
      <Navbar cartCount={cart.length} />

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
    </div>
  )
}
