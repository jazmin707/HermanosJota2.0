import React, { useEffect, useState } from "react"

export default function ProductList({ onProductClick }) {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/productos")
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h2>Lista de productos</h2>
      {productos.map(p => (
        <div key={p.id} onClick={() => onProductClick(p)} style={{border:"1px solid gray", margin:"10px", padding:"10px", cursor:"pointer"}}>
          <h3>{p.nombre}</h3>
          <p>Precio: ${p.precio}</p>
        </div>
      ))}
    </div>
  )
}
