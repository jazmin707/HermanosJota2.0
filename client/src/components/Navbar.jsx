import React from "react"

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1 className="titulo-navbar">Mi Tienda</h1>
      <div className="carrito-navbar">🛒 Carrito: {cartCount}</div>
    </nav>
  )
}
