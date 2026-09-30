const botonEnviar = document.getElementById("botoEnviar");

if (botonEnviar) {
    botonEnviar.addEventListener("click", function () {
        
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const tipoConsulta = document.getElementById("tipoConsulta").value;
        const comentario = document.getElementById("comentario").value;

        const respuesta = document.getElementById("respuesta");

        if (nombre == "") {
            respuesta.textContent = "Falta completar el nombre.";

        } else if (apellido == "") {
            respuesta.textContent = "Falta completar el apellido.";

        } else if (email == "") {
            respuesta.textContent = "Falta completar el mail.";

        } else if (tipoConsulta == "") {
            respuesta.textContent = "Falta completar el tipo.";

        } else {
            respuesta.textContent = "";
            alert("Consulta enviada.");
        }
    });
}


const botoInfo = document.getElementById("botonInfo");

if (botoInfo) {
    botoInfo.addEventListener("click", function() {
        const info = document.getElementById("info");

        if (info.style.display == "none") {
            info.style.display = "block";
            botoInfo.textContent = "Ver menos";
            
        } else {
            info.style.display = "none";
            botoInfo.textContent = "Ver más";

        }
    });
}

const imagen = document.getElementById("imagenPortada");

if (imagen) {
    imagen.addEventListener("mouseover", function() {
        imagen.src = "imagenes/empresa2.png";

    });

    imagen.addEventListener("mouseout", function () {
        imagen.src="imagenes/empresa.png";
        
    });
    
}
