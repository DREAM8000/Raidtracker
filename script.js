// Importamos la función gsap del objeto window para usarla directamente
const { gsap } = window;

document.addEventListener("DOMContentLoaded", function() {
  // Animación del encabezado
  gsap.from("header h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 0.5
  });

  // Animación del formulario de registro
  gsap.from("#registro", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1
  });

  // Agregamos un evento de escucha para el envío del formulario
  document.getElementById("formularioRegistro").addEventListener("submit", function(event) {
    // Evita que el formulario se envíe de manera predeterminada
    event.preventDefault();

    // Recolecta los datos del formulario
    const nombreClub = document.getElementById("nombre_club").value;
    const descripcion = document.getElementById("descripcion").value;

    // Crea un objeto FormData para enviar los datos al script PHP
    const formData = new FormData();
    formData.append("nombre_club", nombreClub);
    formData.append("descripcion", descripcion);

    // Enviar los datos al script PHP mediante una solicitud POST usando Fetch API
    fetch("guardar_actividad.php", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Hubo un error al enviar los datos.");
      }
      return response.text();
    })
    .then(data => {
      alert(data); // Muestra el mensaje de respuesta del servidor (opcional)
    })
    .catch(error => {
      console.error(error);
      alert("Hubo un error al enviar los datos. Por favor, inténtalo de nuevo más tarde.");
    });
  });
});