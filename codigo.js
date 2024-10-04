// Cargar mapa en la sección de ubicación
function initMap() {
    const ubicacion = { lat: -34.6037, lng: -58.3816 };  // Coordenadas de ejemplo
    const mapa = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 15,
        center: ubicacion,
    });
    const marcador = new google.maps.Marker({
        position: ubicacion,
        map: mapa,
    });
}

// Enviar formulario de contacto
document.getElementById('form-contacto').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Simular envío y respuesta
    document.getElementById('respuesta').innerHTML = 'Gracias, ' + nombre + '. Nos pondremos en contacto contigo pronto!';
});

// Cargar el mapa al cargar la página
window.onload = initMap;
