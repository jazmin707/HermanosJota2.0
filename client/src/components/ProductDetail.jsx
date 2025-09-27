import React from "react"

export default function ProductDetail({ product, onAddToCart, onBack }) {
  return (
    <div>
      <h2>{product.nombre}</h2>
      <p>Precio: ${product.precio}</p>
      <button onClick={() => onAddToCart(product)}>Añadir al carrito</button>
      <button onClick={onBack} style={{marginLeft:"10px"}}>Volver</button>
    </div>
  )
}
