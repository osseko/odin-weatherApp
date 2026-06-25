import { format } from "date-fns";

const getPlate = document.getElementById("weatherPlate");
const getCity = document.getElementById("city");
const getUserButton = document.getElementById("userButton");

const getCurrentDay = format(new Date(), "yyyy-MM-dd");

getUserButton.addEventListener("click", ()=>{

if(getPlate.children.length > 1){
    for(let i=0; i < getPlate.children.length; i++){
        getPlate.replaceChildren();
    }
}
    
let getUserCity = getCity.value;
const getDate = getCurrentDay;

     const apiRequest = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${getUserCity}/${getDate}?key=N59K5JC6UM8WVFGRNZN9KRJJB&unitGroup=uk&elements=temp,conditions&timezone&tzoffset&lang=en`

async function getWeather(){
    const response = await fetch(apiRequest)
    const data = await response.json();

    const dayTemp = data.days[0].temp;
    const getConditions = data.days[0].conditions;
    const getLocation = data.address;
    const getTimezone = data.tzoffset;

    function capitalizeLocStr(cityName){
        const newName = cityName[0].toUpperCase() + cityName.slice(1);
        return newName;
    }

    const tempDisplay = document.createElement("div");
    const tempNode = document.createTextNode(dayTemp + "°C")
    tempDisplay.appendChild(tempNode);

    const conditionsDisplay = document.createElement("div");
    const conditionsNode = document.createTextNode(getConditions);
    conditionsDisplay.appendChild(conditionsNode);

    const cityDisplay = document.createElement("div");
    const cityNode = document.createTextNode(capitalizeLocStr(getLocation));
    cityDisplay.appendChild(cityNode);

    const timeZoneDisplay = document.createElement("div");
    const timeZoneNode = document.createTextNode("UTC " + getTimezone);
    timeZoneDisplay.appendChild(timeZoneNode);

    getPlate.appendChild(tempDisplay);
    getPlate.appendChild(conditionsDisplay);
    getPlate.appendChild(cityDisplay);
    getPlate.appendChild(timeZoneDisplay);

    console.log(getPlate.children.length);
    }

getWeather();
getCity.value = "";
    

})




