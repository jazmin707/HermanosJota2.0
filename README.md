# Proyecto E-commerce Hermanos Jota

Este proyecto consiste en el desarrollo de un e-commerce para una mueblería ficticia llamada Hermanos Jota.

## Integrantes

- Gabriela Tapia
- Fiona Cassino
- Celeste Sandobal
- Jazmín Cardona
- Camila Rodríguez

## Instalación y ejecución

El proyecto está dividido en dos carpetas principales: frontend y backend. Para que funcione correctamente es necesario instalar las dependencias y levantar los dos servidores.

1. Primero se debe abrir una terminal y ubicarse en la carpeta del proyecto. Luego ingresar a la carpeta backend, instalar las dependencias con el comando `npm install` y levantar el servidor con `npm start`.

2. De la misma manera, en otra terminal se debe ingresar a la carpeta frontend, instalar las dependencias con `npm install` y levantar el servidor con `npm start`.

De esta forma el frontend quedará disponible en el navegador y el backend estará funcionando para procesar las solicitudes.

## Arquitectura y decisiones

Se utilizó una arquitectura separada entre cliente y servidor. El frontend fue desarrollado con React para manejar la interfaz del usuario y la navegación, mientras que el backend se trabajó con Node.js y Express para crear una API que gestione los datos y la comunicación.

La decisión de separar ambas partes permite un desarrollo más organizado y escalable, facilitando la integración de nuevas funcionalidades en el futuro.