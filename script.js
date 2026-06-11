fetch("https://api.open-meteo.com/v1/forecast?latitude=-31.2526&longitude=-61.4796&current=precipitation,rain,temperature_2m,relative_humidity_2m,is_day,wind_speed_10m,wind_direction_10m,apparent_temperature,wind_gusts_10m")
    .then(response => response.json())
    .then(clima => {

        document.getElementById("temp").textContent =
            clima.current.temperature_2m + " °C";

        document.getElementById("humedad").textContent =
            clima.current.relative_humidity_2m + " %";

        document.getElementById("viento").textContent =
            clima.current.wind_speed_10m + " km/h";

        document.getElementById("lluvia").textContent =
            clima.current.rain + " mm";

    });

    fetch("https://api.open-meteo.com/v1/forecast?latitude=-31.2526&longitude=-61.4796&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,wind_gusts_10m_max&timezone=auto")
        .then(response => response.json())
        .then(clima => {

            console.log(clima);

            const contenedor = document.getElementById("card-clima-extendido");

            for (let i = 0; i < clima.daily.time.length; i++) {

                    const buscadorClima = document.getElementById("buscadorClima");

                    if (buscadorClima) {
                    buscadorClima.addEventListener("keyup", function () {
                        const texto = buscadorClima.value.toLowerCase();
                        const tarjetas = document.querySelectorAll(".card-clima-ext");

                        tarjetas.forEach(function (tarjeta) {
                        const fecha = tarjeta.dataset.dia;

                        if (fecha.includes(texto)) {
                            tarjeta.closest(".card-clima-item").style.display = "block";
                        } else {
                            tarjeta.closest(".card-clima-item").style.display = "none";
                        }
                        });
                    });
                    
            }
            contenedor.innerHTML += `
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card-clima-ext" data-dia="${clima.daily.time[i].toLowerCase()}">
                        <h3>${clima.daily.time[i]}</h3>
                        <p><strong>Máx:</strong> ${clima.daily.temperature_2m_max[i]} °C</p>
                        <p><strong>Mín:</strong> ${clima.daily.temperature_2m_min[i]} °C</p>
                        <p><strong>Lluvia:</strong> ${clima.daily.precipitation_probability_max[i]}%</p>
                        <p><strong>Viento:</strong> ${clima.daily.wind_gusts_10m_max[i]} km/h</p>
                    </div>
                </div>
                `;
            }

        });

       const formulario = document.getElementById("formContacto");

if (formulario) {
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const producto = document.getElementById("producto").value;
        const cantidad = document.getElementById("cantidad").value;
        const localidad = document.getElementById("localidad").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();
        const error = document.getElementById("errorFormulario");

        error.textContent = "";
        error.style.color = "red";

        if (
        nombre === "" ||
        apellido === "" ||
        email === "" ||
        telefono === "" ||
        producto === "" ||
        cantidad === "" ||
        localidad === "" ||
        mensaje === ""
        ) {
        error.textContent = "Por favor, completá todos los campos.";
        return;
        }

        if (!email.includes("@") || !email.includes(".")) {
        error.textContent = "Ingresá un email válido.";
        return;
        }

        if (telefono.length < 8) {
        error.textContent = "Ingresá un teléfono válido.";
        return;
        }

        if (cantidad <= 0) {
        error.textContent = "La cantidad debe ser mayor a 0.";
        return;
        }

        error.style.color = "green";
        error.textContent = "Formulario enviado correctamente.";

        formulario.reset();
    });
    }
        


  