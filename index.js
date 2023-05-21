const inputBox=document.querySelector(".input-box");
const searchBtn=document.getElementById("searchBtn");
const weather_img=document.querySelector(".weather-img");
const temp=document.querySelector(".temp");
const desc=document.querySelector(".desc");
const humidity=document.getElementById("humidity");
const wind_speed=document.getElementById("wind-speed");
const not_found=document.querySelector(".not-found");
const weather_body=document.querySelector(".weather-body");



async function checkWeather(city){
    const api_key="ec7fb9d8c708d13c4875c8400c559369";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data=await fetch(`${url}`).then(response=>response.json());

    if(weather_data.cod=="404"){
        
        not_found.style.display="flex";
        weather_body.style.display="none";
        return;
    }
    
    not_found.style.display="none";
    weather_body.style.display="flex";

    temp.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
    desc.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;
    // console.log(weather_data);

    switch(weather_data.weather[0].main){

        case 'Clouds':
            weather_img.src="/assets/cloud.png";break;
        case 'Clear':
            weather_img.src="/assets/clear.png";break;
        case 'Rain':
            weather_img.src="/assets/rain.png";break;
        case 'Mist':
            weather_img.src="/assets/mist.png";break;
        case 'Snow':
            weather_img.src="/assets/snow.png";break;

    }
    
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
});