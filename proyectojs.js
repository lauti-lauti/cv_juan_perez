document.addEventListener("DOMContentLoaded", function() {
    const contacto = document.querySelector("#contacto a");
    contacto.addEventListener("click", function(event) {
        event.preventDefault();
        alert("¡Gracias por visitar el CV de Juan Pérez! Puedes contactarlo vía email.");
    });
});
