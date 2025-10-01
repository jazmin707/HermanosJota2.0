import React from "react";

export default function ProductCard({ producto, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 12,
        cursor: "pointer",
        background: "#fff"
      }}
    >
      {producto.imagen && (
        <img
          src={producto.imagen}
          alt={producto.nombre}
          style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 6, marginBottom: 8 }}
        />
      )}
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
    </div>
  );
}