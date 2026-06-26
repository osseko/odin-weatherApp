import "./weather.css"
import { format } from "date-fns";
import sunIcon from "./imgs/day.svg";
import cloudyIcon from "./imgs/cloudy-day-3.svg";
import partlyRainyIcon from "./imgs/rainy-3.svg";
import rainy from "./imgs/rainy-7.svg";

//icons from amcharts.com

const getPlate = document.getElementById("weatherPlate");
const getCity = document.getElementById("city");
const getUserButton = document.getElementById("userButton");

const getCurrentDay = format(new Date(), "yyyy-MM-dd");

// getUserButton.addEventListener("click", ()=>{

// if(getPlate.children.length > 1){
//     for(let i=0; i < getPlate.children.length; i++){
//         getPlate.replaceChildren();
//     }
// }
    
// let getUserCity = getCity.value;
// const getDate = getCurrentDay;

//      const apiRequest = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${getUserCity}/${getDate}?key=N59K5JC6UM8WVFGRNZN9KRJJB&unitGroup=uk&elements=temp,conditions&timezone&tzoffset&lang=en`

// async function getWeather(){
//     const response = await fetch(apiRequest)
//     const data = await response.json();

//     const dayTemp = data.days[0].temp;
//     const getConditions = data.days[0].conditions;
//     const getLocation = data.address;
//     const getTimezone = data.tzoffset;

//     function capitalizeLocStr(cityName){
//         const newName = cityName[0].toUpperCase() + cityName.slice(1);
//         return newName;
//     }

//     const conditionsDisplay = document.createElement("div");
//     conditionsDisplay.setAttribute("id", "conditions");
//     const conditionsNode = document.createTextNode(getConditions);
//     conditionsDisplay.appendChild(conditionsNode);

//     const tempDisplay = document.createElement("div");
//         tempDisplay.setAttribute("id", "cityTemp");
//     const tempNode = document.createTextNode(dayTemp + "°C")
//     tempDisplay.appendChild(tempNode);
    
//     const cityDisplay = document.createElement("div");
//         cityDisplay.setAttribute("id", "cityName");
//     const cityNode = document.createTextNode(capitalizeLocStr(getLocation));
//     cityDisplay.appendChild(cityNode);

//     const timeZoneDisplay = document.createElement("div");
//         timeZoneDisplay.setAttribute("id", "timeZone");
//     const timeZoneNode = document.createTextNode("UTC " + getTimezone);
//     timeZoneDisplay.appendChild(timeZoneNode);

//     getPlate.appendChild(conditionsDisplay);
//     getPlate.appendChild(tempDisplay);
//     getPlate.appendChild(cityDisplay);
//     getPlate.appendChild(timeZoneDisplay);

//     console.log(getPlate.children.length);
//     }

// getWeather();
// getCity.value = "";
    

// })

const weatherIcon = document.createElement("div");
    weatherIcon.setAttribute("id", "weatherIcon");
const getWeatherIcon = document.createElement("img");
    getWeatherIcon.src = ""

 const conditionsDisplay = document.createElement("div");
        conditionsDisplay.setAttribute("id", "conditions");
    const conditionsNode = document.createTextNode("cloudy");
    conditionsDisplay.appendChild(conditionsNode);

 const tempDisplay = document.createElement("div");
        tempDisplay.setAttribute("id", "cityTemp");
    const tempNode = document.createTextNode("30°C")
    tempDisplay.appendChild(tempNode);

   

    const cityDisplay = document.createElement("div");
        cityDisplay.setAttribute("id", "cityName");
    const cityNode = document.createTextNode("location");
    cityDisplay.appendChild(cityNode);

    const timeZoneDisplay = document.createElement("div");
        timeZoneDisplay.setAttribute("id", "timeZone");
    const timeZoneNode = document.createTextNode("UTC ");
    timeZoneDisplay.appendChild(timeZoneNode);

      getPlate.appendChild(conditionsDisplay);
    getPlate.appendChild(tempDisplay);
  
    getPlate.appendChild(cityDisplay);
    getPlate.appendChild(timeZoneDisplay);




