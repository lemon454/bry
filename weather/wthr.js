const apikey = "fe43da62ad18aaf668bc4d635c513d07";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const srchbox = document.querySelector(".search input");
const srchbtn = document.querySelector(".search button");
const wthr = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiUrl + city +`&appid=${apikey}`)

  if(response.status == 404){
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  }else{
    var data = await response.json();
    console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

  if(data.weather[0].main == 'Clouds'){
    wthr.src = 'cldy.gif'
  }else if(data.weather[0].main == 'Mist'){
    wthr.src = 'mst.gif';
  } 
  else if(data.weather[0].main == 'Rain'){
    wthr.src = 'rny.gif';
  } 
  else if(data.weather[0].main == 'Clear'){
    wthr.src = 'clr.gif';
  } 
  else if(data.weather[0].main == 'Windy'){
    wthr.src = 'wndy.gif';
  }
  document.querySelector('.weather').style.display = 'block';
  document.querySelector('.error').style.display = 'none';

  }

  

}
srchbtn.addEventListener('click', ()=> {
  checkWeather(srchbox.value);
})

