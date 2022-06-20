const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "9dd33389acf49d18987a4098f7e21ee8";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;  
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
       city.innerText = data.name;
       weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      });
}
function onGeoErro() {
    alert("현재 위치를 나타낼 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErro);