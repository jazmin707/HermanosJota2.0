import { useState } from "react";


export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [exito, setExito] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mostrar mensaje de éxito
    setExito(true);
    console.log({ nombre, email, mensaje });

    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => setExito(false), 5000);

    // Limpiar formulario
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <div className="contact-form-container">
      <h1>Contacto</h1>
      <p>¿Tenés preguntas? Dejanos tu mensaje y te responderemos pronto.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ejemplo@correo.com"
          required
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows="5"
          placeholder="Escribí tu mensaje..."
          required
        />

        <button type="submit">Enviar</button>
      </form>

      {exito && <div className="mensaje-exito">Gracias {nombre}, tu mensaje fue enviado.</div>}
    </div>
  );
}
