document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript cargado correctamente.");
  
    // MENSAJE PERSONALIZADO SEGÚN LA HORA
  const mensajeDiv = document.getElementById("mensaje-bienvenida");
  const hora = new Date().getHours();
  let mensaje = "";
  if (hora < 12) {
    mensaje = "¡Buenos días! Que tengas una celebración llena de luz.";
  } else if (hora < 18) {
    mensaje = "¡Buenas tardes! Honrando con alegría el recuerdo de quienes amamos.";
  } else {
    mensaje = "¡Buenas noches! Que el recuerdo de nuestros seres queridos brille siempre.";
  }
  
  mensajeDiv.textContent = mensaje;

// SLIDER AUTOMÁTICO EN LA SECCIÓN GALERÍA
  const imagenes = document.querySelectorAll(".galeria img");
  let indice = 0;

  function mostrarImagen(index) {
    imagenes.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
  }

  mostrarImagen(indice);

  setInterval(() => {
    indice = (indice + 1) % imagenes.length;
    mostrarImagen(indice);
  }, 3000);

    // EFECTO EN EL MENÚ
    const menuItems = document.querySelectorAll("nav ul li a");

    menuItems.forEach(item => {
      item.addEventListener("mouseover", () => {
        item.style.color = "#FFD700"; // dorado
      });
      item.addEventListener("mouseout", () => {
        item.style.color = "white"; // blanco
      });
    });
  });