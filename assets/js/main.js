window.onload = function () {


  fetch(`https://mars-weather-rems.netlify.app/rems.json`)
    .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
    .then(res => {

      let caja = document.getElementById("caja");
      let temperatures = document.querySelector('.weather_min_max')
      let degrees = document.querySelector('.weather_degrees')


      caja.innerHTML = ''

      caja.innerHTML = `<li><span>sol: ${res.weather_report.sol}</span></li>
      <li><span>magnitudes: ${res.weather_report.magnitudes[0].min_temp}</span></li>
      <li><span>info: ${res.weather_report.disclaimer[0].en}</span></li>`;


      degrees.innerHTML = `${res.weather_report.magnitudes[0].min_temp}°</span></li></ul>`
      temperatures.innerHTML = `<ul><li><span>${res.weather_report.magnitudes[0].min_temp}°C</span></li>
      <li><span> ${res.weather_report.magnitudes[0].max_temp}°C</span></li></ul>`

    });

  function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "am";

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "pm";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + " ";
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

  }

  showTime();

  function showMeridian() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var session = "am";

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "pm";
    }


    var meridian = `${session}`;
    document.getElementById("date_meridian").innerText = meridian;

    setTimeout(showTime, 1000);
  
  }

  showMeridian();


  function showDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("date_today").innerText = today;
  }

  showDate();


  function dateIncrement(time) {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = 00
    var s = date.getSeconds(); // 0 - 59
    var hplus = date.getHours() + 1

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "pm";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + " ";
    var timeincrement1 = hplus + ":" + m + " ";
    var timeincrement2 = (hplus + 1) + ":" + m + " ";
    var timeincrement3 = (hplus + 2) + ":" + m + " ";
    var timeincrement4 = (hplus + 3) + ":" + m + " ";

    document.getElementById("weather_increments").innerHTML = `<ul><li>${timeincrement1}</li><li>${timeincrement2}</li><li>${timeincrement3}</li><li>${timeincrement4}</li></ul>`;

    setTimeout(showTime, 1000);

  }

  dateIncrement();


  // Save Data

  var button = document.querySelector(".button")
  button.addEventListener('click', () => {
    var modal = document.querySelector(".info")
    modal.classList().add()
  })


  window.onload = function(){
    let caja = document.querySelector(".caja");
    localStorage.cuenta = localStorage.getItem("cuenta") ? localStorage.getItem("cuenta") : 0;
    localStorage.cuenta++;
    caja.innerHTML = `Esta página ha recibido ${localStorage.getItem("cuenta")} visitas`;
    }

}


