import React from "react"

export default function Navbar({ cartCount }) {
  return (
    <nav style={{display:"flex", justifyContent:"space-between", padding:"10px", background:"#ddd"}}>
      <h1>Mi Tienda</h1>
      <div>🛒 Carrito: {cartCount}</div>
    </nav>
  )
}
