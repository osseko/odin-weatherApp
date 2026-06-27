import "./weather.css"
import { format } from "date-fns";
import snowIcon from "./imgs/snowy-6.svg"
import rainIcon from "./imgs/rainy-7.svg";
import fogIcon from "./imgs/cloudy-day-1.svg"
import sunIcon from "./imgs/day.svg";
import cloudyIcon from "./imgs/cloudy-day-3.svg";
import partlyRainyIcon from "./imgs/rainy-3.svg";
import loadIcon from "./imgs/12-dots-scale-rotate.svg"

//icons from amcharts.com

const getCard = document.getElementById("weatherCard");
const getPlate = document.getElementById("weatherPlate");
const getCity = document.getElementById("city");
const getUserButton = document.getElementById("userButton");

const getCurrentDay = format(new Date(), "yyyy-MM-dd");

const welcome = document.createElement("div");
    welcome.setAttribute("id", "welcome")
const welcomeText = document.createTextNode("How's the Weather");
welcome.appendChild(welcomeText);
getPlate.appendChild(welcome);

const loading = document.createElement("img");
    loading.setAttribute("id", "loadSpin")
    loading.src = loadIcon;



getUserButton.addEventListener("click", ()=>{


if(getPlate.children.length >= 1){
    for(let i=0; i < getPlate.children.length; i++){
        getPlate.replaceChildren();
    }
}

getPlate.appendChild(loading);

let getUserCity = getCity.value;
const getDate = getCurrentDay;

let visualCrossingUri = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";  

const apiKey = "N59K5JC6UM8WVFGRNZN9KRJJB"

let forecastRequest = visualCrossingUri+=getUserCity+"/"+getDate+"?"+"key="+apiKey+"&unitGroup=uk&include=days,hours,alerts,current&elements=temp,conditions&timezone&tzoffset&lang=en&iconSet"
  

async function getWeather(){

    getPlate.removeChild(loading);

    const response = await fetch(forecastRequest)
    const data = await response.json();

    const dayTemp = data.days[0].temp;
    const getConditions = data.days[0].conditions;
    const getLocation = data.address;
    const getTimezone = data.tzoffset;

    function findIcon(conditions){
        if(conditions.includes("Snow")){
            return snowIcon;
        }if(conditions.includes("Rain")){
            return rainIcon;
        }if(conditions.includes("Fog")){
            return fogIcon;
        }if(conditions.includes("Wind")){
            return fogIcon;
        }if(conditions.includes("Cloudy")){
            return cloudyIcon;
        }if(conditions.includes("Clear")){
            return sunIcon;
        }if(conditions.includes("Partially")){
            return fogIcon;
        }
    }

    function capitalizeLocStr(cityName){
        const newName = cityName[0].toUpperCase() + cityName.slice(1);
        return newName;
    }

    const weatherIcon = document.createElement("div");
        weatherIcon.setAttribute("id", "weatherIcon");
    const getWeatherIcon = document.createElement("img");
        getWeatherIcon.setAttribute("id", "getWeather");
    getWeatherIcon.setAttribute("src", findIcon(getConditions));
    weatherIcon.appendChild(getWeatherIcon);

    const conditionsDisplay = document.createElement("div");
    conditionsDisplay.setAttribute("id", "conditions");
    const conditionsNode = document.createTextNode(getConditions);
    conditionsDisplay.appendChild(conditionsNode);

    const tempDisplay = document.createElement("div");
        tempDisplay.setAttribute("id", "cityTemp");
    const tempNode = document.createTextNode(dayTemp + "°C")
    tempDisplay.appendChild(tempNode);
    
const cityTime = document.createElement("div");
    cityTime.setAttribute("id", "cityTime");
    const cityDisplay = document.createElement("div");
        cityDisplay.setAttribute("id", "cityName");
    const cityNode = document.createTextNode(capitalizeLocStr(getLocation));
    cityDisplay.appendChild(cityNode);

    const timeZoneDisplay = document.createElement("div");
        timeZoneDisplay.setAttribute("id", "timeZone");
    const timeZoneNode = document.createTextNode("UTC " + getTimezone);
    timeZoneDisplay.appendChild(timeZoneNode);

        cityTime.appendChild(cityDisplay);
        cityTime.appendChild(timeZoneDisplay);

    getPlate.appendChild(weatherIcon);
    getPlate.appendChild(conditionsDisplay);
    getPlate.appendChild(tempDisplay);
    getPlate.appendChild(cityTime);

    const getTempToColor = dayTemp;
    function getGradient(tempValue){
        let color1 
        let color2
        let color3

        if(tempValue === 25){
            color1 = 244;
            color2 = 255;
            color3 = 219;
        }
        if(tempValue === 0){
            color1 = 255;
            color2 = 255;
            color3 = 255;
        }
        if(tempValue < 25 && tempValue >= 1){    
            const tempDiff = 25 - tempValue;
            color1 = 135 - (tempValue*(tempDiff/2));
            color2 = 248 - (tempValue*(tempDiff/2));
            color3 = 255;
        }
        if(tempValue > 25){
            const tempDiff = tempValue - 25;
            color1 = 255;
            color2 = 255 - (tempValue*(tempDiff/2));
            color3 = 255 - (tempValue*(tempDiff/2));
        }
    return {color1, color2, color3}
        
    }

        
        const secondGradient =`rgb(${getGradient(getTempToColor).color1}, ${getGradient(getTempToColor).color2}, ${getGradient(getTempToColor).color3})`;
        
    getCard.style.backgroundImage = `linear-gradient(180deg, rgb(250, 255, 254), ${secondGradient}`;

    getCard.style.borderRadius = "25px";
      

    }

setTimeout(getWeather, 500);

getCity.value = "";   
   

})


