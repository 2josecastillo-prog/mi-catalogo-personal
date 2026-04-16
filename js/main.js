document.addEventListener("DOMContentLoaded", () => {
    // Lógica de Tabs
    const tabBtns = document.querySelectorAll(".tab-btn");
    const sections = {
        "catalogo": [document.getElementById("banner"), document.getElementById("catalogo")],
        "quien-soy": [document.getElementById("quien-soy")],
        "contacto": [document.getElementById("contacto")]
    };

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Quitar clase active de todos los botones
            tabBtns.forEach(b => b.classList.remove("active"));
            // Ocultar todas las secciones
            Object.values(sections).forEach(group => {
                group.forEach(sec => {
                    if (sec) sec.classList.remove("active");
                });
            });

            // Activar botón actual
            btn.classList.add("active");
            // Mostrar la sección correspondiente
            const target = btn.getAttribute("data-target");
            if (sections[target]) {
                sections[target].forEach(sec => sec.classList.add("active"));
            }
        });
    });

    const form = document.getElementById("formulario-contacto");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", (e) => {
        // Prevenimos que la página se recargue al enviar el formulario
        e.preventDefault();

        // Obtenemos los valores de los inputs
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Limpiamos los estilos y contenido previos del feedback
        feedback.className = "";
        
        // Validación básica
        if (nombre === "" || email === "" || mensaje === "") {
            feedback.textContent = "Por favor, completa todos los campos requeridos.";
            feedback.classList.add("feedback-error");
            feedback.style.display = "block";
            return;
        }

        // Simular envío exitoso mediante JavaScript dinámico
        feedback.textContent = "¡Gracias por contactarnos, " + nombre + "! Hemos recibido tu mensaje y te responderemos pronto.";
        feedback.classList.add("feedback-success");
        feedback.style.display = "block";
        
        // Limpiamos el formulario automáticamente
        form.reset();

        // Ocultar mensaje de éxito después de 6 segundos
        setTimeout(() => {
            feedback.style.display = "none";
        }, 6000);
    });
});
