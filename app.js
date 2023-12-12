let cityName = document.getElementById('cityName');
let cityValue = document.getElementById('cityValue');
let countryName = document.getElementById('countryName');
let temperature = document.getElementById('temperature');
let img = document.getElementById('img')


let search = async () => {
      if (cityValue.value.length == 0) {
            alert('Please Enter the city Name Before Enter')
      } else {
            try {

                  let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityValue.value + "&units=metric&appid=1cb6532aea3c298a830a71380eace21e"
                  let response = await fetch(url)
                  let data = await response.json();
                  cityName.textContent = data.name
                  countryName.textContent = data.sys.country
                  temperature.textContent = data.main.temp
                  if (data.maintemp < 15) {
                        img.src = "./img/sun.png"
                  } else if (data.main.tepm >= 15 && data.main.temp <= 25) {
                        img.src = "sun.png"
                  } else {
                        img.src = "sunn.png"
                  }
            } catch {
                  alert("please enter a valid city name")

            }
      }
}
let date = new Date();



