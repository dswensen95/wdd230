const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=8931403a89ba3eb3e71a808239b9d8cb&units=imperial";

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    const tempNumber = parseFloat(document.getElementById('temp').textContent = jsObject.main.temp);
    const windSpeed = parseFloat(document.getElementById('speed').textContent = jsObject.wind.speed);

    let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * tempNumber * Math.pow(windSpeed, 0.16));
        windchill = Math.round(windchill);
        console.log(windchill);

if (tempNumber<=50 && windSpeed >3){
    document.getElementById("chill").textContent = "Wind Chill is: " + windchill + "\xB0F";
}
else {
    document.getElementById("chill").textContent = "No Wind Chill"
}
});

const d = new Date();

const todayDayNumber = d.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=8931403a89ba3eb3e71a808239b9d8cb&units=imperial';

fetch(apiURL2)
    .then((response) => response.json())
    .then((weather) => {
        console.log(weather);
        document.getElementById("town").textContent = weather.city.name;
        
        let mylist = weather.list;
        
            let forecastDayNumber = todayDayNumber;
            for (i = 0; i < mylist.length; i++){
                let time = mylist[i].dt_txt;
                
                if (time.includes("18:00:00")){
                    console.log("Found an entry with 18:00:00 in the time. It was report "+i+" from the mylist of 40");
                    
                    forecastDayNumber += 1;
                    if (forecastDayNumber === 7){forecastDayNumber = 0;}

            let theDayName = document.createElement("span");
            theDayName.textContent = weekday[forecastDayNumber];

            let theTemp = document.createElement("p");
            theTemp.textContent = weather.list[i].main.temp + "\xB0";

            let iconcode = weather.list[i].weather[0].icon;
            let iconPath = "https://openweathermap.org/img/w/" + iconcode + ".png";
            let theIcon = document.createElement("img");
            theIcon.src=iconPath;

            let theDay = document.createElement("div");
            theDay.setAttribute('id', 'wForecast');
            theDay.appendChild(theDayName);
            theDay.appendChild(theTemp);
            theDay.appendChild(theIcon);

            document.getElementById("forecast").appendChild(theDay);
        }
            
    }
});