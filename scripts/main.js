document.addEventListener("DOMContentLoaded", function() {
    // Scroll suave a secciones
    const btnConocenos = document.querySelector("button:nth-of-type(1)");
    const btnContactar = document.querySelector("button:nth-of-type(2)");

    btnConocenos.addEventListener("click", () => {
        document.querySelector(".sobre-nosotros").scrollIntoView({ behavior: "smooth" });
    });

    btnContactar.addEventListener("click", () => {
        document.querySelector("#contacto").scrollIntoView({ behavior: "smooth" });
    });

    // Animación de aparición al hacer scroll
    const secciones = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    secciones.forEach(sec => observer.observe(sec));

    // Efecto hover dinámico para todos los botones
    const botones = document.querySelectorAll("button");
    botones.forEach(boton => {
        boton.addEventListener("mouseenter", () => {
            boton.style.transform = "scale(1.15)";
        });
        boton.addEventListener("mouseleave", () => {
            boton.style.transform = "scale(1)";
        });
    });

    // Envío del formulario con confirmación
    const form = document.getElementById("form-contacto");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("✅ Gracias por tu mensaje, Luis Fernando. Nos pondremos en contacto pronto.");
        form.reset();
    });
});
