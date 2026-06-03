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

            const contenedor =
                document.getElementById("card-clima-extendido");

            for(let i = 0; i < clima.daily.time.length; i++) {

                contenedor.innerHTML += `

                    <div class="Dia">

                        <h2>${clima.daily.time[i]}</h2>

                        <p>Temperatura Máx:
                        ${clima.daily.temperature_2m_max[i]} °C</p>

                        <p>Temperatura Mín:
                        ${clima.daily.temperature_2m_min[i]} °C</p>

                        <p>Amanecer:
                        ${clima.daily.sunrise[i]}</p>

                        <p>Puesta de sol:
                        ${clima.daily.sunset[i]}</p>

                        <p>Probabilidad lluvia:
                        ${clima.daily.precipitation_probability_max[i]}%</p>

                        <p>Viento Máx:
                        ${clima.daily.wind_gusts_10m_max[i]} km/h</p>

                         
                    </div>

                `;
            }

    });