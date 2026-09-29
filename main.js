// Obtenemos todas las tarjetas de tecnologías
const tarjetas = document.querySelectorAll(".spanData");

// Obtenemos todos los proyectos
const proyectos = document.querySelectorAll(".proyecto");

// Tecnologías seleccionadas
let filtrosActivos = [];


// CUANDO SE HACE CLICK EN UNA TECNOLOGÍA

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("click", () => {

        // Obtenemos la tecnología
        const tecnologia = tarjeta.dataset.tech;


        // SI LA TECNOLOGÍA YA ESTÁ SELECCIONADA

        if (filtrosActivos.includes(tecnologia)) {

            // La eliminamos del array
            filtrosActivos = filtrosActivos.filter(
                tech => tech !== tecnologia
            );

            // Quitamos el efecto visual
            tarjeta.classList.remove("activo");

        }


        // SI LA TECNOLOGÍA NO ESTÁ SELECCIONADA

        else {

            // La añadimos al array
            filtrosActivos.push(tecnologia);

            // Añadimos el efecto visual
            tarjeta.classList.add("activo");

        }


        // Volvemos a filtrar los proyectos
        filtrarProyectos();

    });

});


// FUNCIÓN PARA FILTRAR LOS PROYECTOS

function filtrarProyectos() {

    proyectos.forEach(proyecto => {

        // Obtenemos las tecnologías del proyecto
        const tecnologiasProyecto = proyecto.dataset.tech
            ? proyecto.dataset.tech.split(" ")
            : [];


        // SI NO HAY FILTROS ACTIVOS

        if (filtrosActivos.length === 0) {

            // Mostramos todos los proyectos
            proyecto.style.display = "";

        }


        // SI HAY FILTROS ACTIVOS

        else {

            // El proyecto debe tener TODAS
            // las tecnologías seleccionadas
            const coincide = filtrosActivos.every(
                tecnologia =>
                    tecnologiasProyecto.includes(tecnologia)
            );


            // SI COINCIDE

            if (coincide) {

                // Mostramos el proyecto
                proyecto.style.display = "";

            }


            // SI NO COINCIDE

            else {

                // Ocultamos el proyecto
                proyecto.style.display = "none";

            }

        }

    });

}