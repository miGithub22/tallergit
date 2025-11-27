document.addEventListener("DOMContentLoaded", function() {
    // Botón "Conócenos" -> scroll a la sección sobre nosotros
    const btnConocenos = document.querySelector("button:nth-of-type(1)");
    btnConocenos.addEventListener("click", () => {
        document.querySelector(".sobre-nosotros").scrollIntoView({
            behavior: "smooth"
        });
    });

    // Botón "Contactar" -> scroll a la sección de contacto
    const btnContactar = document.querySelector("button:nth-of-type(2)");
    btnContactar.addEventListener("click", () => {
        document.querySelector("#contacto").scrollIntoView({
            behavior: "smooth"
        });
    });

    // Efecto hover dinámico para todos los botones
    const botones = document.querySelectorAll("button");
    botones.forEach(boton => {
        boton.addEventListener("mouseenter", () => {
            boton.style.transform = "scale(1.1)";
        });
        boton.addEventListener("mouseleave", () => {
            boton.style.transform = "scale(1)";
        });
    });

    // Envío del formulario
    const form = document.getElementById("form-contacto");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Gracias por tu mensaje, nos pondremos en contacto pronto.");
        form.reset();
    });
});
