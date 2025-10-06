import React from "react";

export default function ProductCard({ producto, onClick }) {
  return (
    <div className="tarjeta-individual" onClick={onClick}>
      {producto.imagen && (
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="imagen-producto"
        />
      )}
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
    </div>
  );
}
