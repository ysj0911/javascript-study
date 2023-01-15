const API_KEY = "24a1cef063ae56a4197dc02320d6f2cc"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(position);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);