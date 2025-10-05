import React, { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

export default function ProductList({ onProductClick }) {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/api/productos")
      .then(res => {
        if (!res.ok) throw new Error("Error al cargar productos")
        return res.json()
      })
      .then(data => setProductos(data))
      .catch(err => setError(err.message))
      .finally(() => setCargando(false))
  }, [])

  if (cargando) return <p>Cargando...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h2>Lista de productos</h2>
      {productos.map(p => (
        <ProductCard key={p.id} producto={p} onClick={() => onProductClick(p)} />
      ))}
    </div>
  )
}
