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

            contenedor.innerHTML += `
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card-clima-ext">
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

        const formulario = document.querySelector("#Formulario form");

        formulario.addEventListener("submit", function(e){
            e.preventDefault();

            const nombre = document.querySelector("#nombre").value;
            const telefono = document.querySelector("#telefono").value;
            const producto = document.querySelector("#producto").value;

            if(nombre === "" || telefono === "" || producto === ""){
                alert("Por favor completá los campos obligatorios.");
                return;
            }

            alert("Consulta enviada correctamente.");
            formulario.reset();
        });


  console.log("grafico.js cargado");

const contenedor = document.getElementById("graficoClima");

console.log(contenedor);
console.log(echarts);

const grafico = echarts.init(contenedor);

const opciones = {
  xAxis: {
    type: "category",
    data: ["Lun", "Mar", "Mié", "Jue", "Vie"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [18, 22, 25, 21, 19],
      type: "line"
    }
  ]
};

grafico.setOption(opciones);