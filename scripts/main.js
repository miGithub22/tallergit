document.addEventListener("DOMContentLoaded", function() {
    // Botón "Conócenos" -> scroll a la sección sobre nosotros
    const btnConocenos = document.querySelector("button:nth-of-type(1)");
    btnConocenos.addEventListener("click", () => {
        document.querySelector(".sobre-nosotros").scrollIntoView({
            behavior: "smooth"
        });
    });

    // Botón "Contactar" -> scroll a la sección de contacto (debes tenerla en tu HTML)
    const btnContactar = document.querySelector("button:nth-of-type(2)");
    btnContactar.addEventListener("click", () => {
        const contacto = document.querySelector("#contacto");
        if (contacto) {
            contacto.scrollIntoView({
                behavior: "smooth"
            });
        } else {
            alert("La sección de contacto no está disponible.");
        }
    });

    // Efecto hover dinámico para todos los botones
    const botones = document.querySelectorAll("button");
    botones.forEach(boton => {
        boton.addEventListener("mouseenter", () => {
            boton.style.transform = "scale(1.1)";
            boton.style.backgroundColor = "#4CAF50";
            boton.style.color = "#fff";
        });
        boton.addEventListener("mouseleave", () => {
            boton.style.transform = "scale(1)";
            boton.style.backgroundColor = "";
            boton.style.color = "";
        });
    });
});
