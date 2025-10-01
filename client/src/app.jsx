import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

/*

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

*/