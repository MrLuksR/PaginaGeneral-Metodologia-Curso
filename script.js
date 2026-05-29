// Función para elegir secciones
function setSection(id, dis){
    document.getElementById(id).style.display = dis;
}

// Función para mostrar sección para BTNs del nav
function mostSec(id){
    if (id == "inicio"){
        setSection("inicio", 'block');
        setSection("unidades", 'none');
        setSection("recursos", 'none');
        setSection("normas", 'none');
        setSection("evaluacion", 'none')
    }else if (id == "unidades"){
        setSection("inicio", 'none');
        setSection("unidades", 'block');
        setSection("recursos", 'none');
        setSection("normas", 'none');
        setSection("evaluacion", 'none')
    }else if (id == "recursos"){
        setSection("inicio", 'none');
        setSection("unidades", 'none');
        setSection("recursos", 'block');
        setSection("normas", 'none');
        setSection("evaluacion", 'none')
    }else if (id == "evaluacion"){
        setSection("inicio", 'none');
        setSection("unidades", 'none');
        setSection("recursos", 'none');
        setSection("normas", 'none');
        setSection("evaluacion", 'block')
    }else if (id == "normas"){
        setSection("inicio", 'none');
        setSection("unidades", 'none');
        setSection("recursos", 'none');
        setSection("normas", 'block');
        setSection("evaluacion", 'none')
    }
}

mostSec("inicio"); // MOSTRAR INICIO PARA AL EMPEZAR

function mostrarRecurso(tipo) {

    const titulo = document.getElementById("titulo-recurso");
    const contenido = document.getElementById("contenido-recurso");

    if (tipo === "videos") {

        titulo.innerHTML = "🎥 Videos de Apoyo";

        contenido.innerHTML =`

                <div class="videos-grid">

                    <div class="video-card">

                        <h3>¿Qué es la ciudadanía digital?</h3>

                        <iframe
                            src="https://www.youtube.com/embed/QAiN164WQ-o"
                            allowfullscreen>
                        </iframe>

                    </div>

                    <div class="video-card">

                        <h3>Privacidad en internet</h3>

                        <iframe
                            src="https://www.youtube.com/embed/6S8A-1jBD5Y"
                            allowfullscreen>
                        </iframe>

                    </div>

                </div>

            `;
    }

    else if (tipo === "lecturas") {

        titulo.innerHTML = "📄 Lecturas";

        contenido.innerHTML =
            "Materiales teóricos y presentaciones para complementar el aprendizaje.";
    }

    else if (tipo === "infografias") {

        titulo.innerHTML = "📊 Infografías";

        contenido.innerHTML =
            "<iframe src='https://www.canva.com/design/DAHK_kZZ7hE/LTs6AA2ZuQT3Zw2txlocOw/view?embed' allowfullscreen></iframe>";

    }

    else if (tipo === "cuestionarios") {

        titulo.innerHTML = "📝 Cuestionarios";

        contenido.innerHTML =
            "Actividades interactivas para evaluar lo aprendido en cada unidad.";

    }

}

/*Fundamenctación potenciada con el MCN*/