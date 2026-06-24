import { format } from "date-fns";

const getCity = document.getElementById("city");
const getUserButton = document.getElementById("userButton");


// const apiKey = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[unitgroup]?key=N59K5JC6UM8WVFGRNZN9KRJJB"

//apiaddress + location=getCityinput.value + gettodaydate + key + unitGroup + elements=temp + timezone=z
//buttonaddeventlistener

getUserButton.addEventListener("click", ()=>{
     // const apiAddress = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"

    // const getSearchValue = `location=${getCity.value}`;

    // const getTodayDate = format(new Date(), "yyyy-MM-dd");

    // const apiKey = "key=N59K5JC6UM8WVFGRNZN9KRJJB"

    // const getTemp = "elements=temp"



console.log("clicked")
    
    
})





async function getWeather(){
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/location=Manila/2026-6-24?key=N59K5JC6UM8WVFGRNZN9KRJJB&unitGroup=uk&elements=temp&timezone&tzoffset")
    const data = await response.json();

    console.log(data);
    console.log(data.days[0].temp)
    console.log(data.resolvedAddress)
    
}

getWeather();




