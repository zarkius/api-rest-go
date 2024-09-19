document.addEventListener("DOMContentLoaded", () => {
    // Obtener la hora actual
    const obtenerHoraActual = () => {
        const fecha = new Date();
        const hora = fecha.getHours();
        const minutos = fecha.getMinutes();
        const segundos = fecha.getSeconds();

        // Formatear la hora
        const horaFormateada = `${hora}:${minutos}:${segundos}`;

        return horaFormateada;
    };

    // Ejemplo de uso
    setInterval(() => {
        let hora = obtenerHoraActual();
        document.getElementById("hora").innerHTML = "Tu hora local es: " + hora;
    }, 1000);
});