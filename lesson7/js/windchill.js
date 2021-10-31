const tempNumber = parseFloat(document.getElementById("temp").textContent);
        console.log(tempNumber);

        const windSpeed = parseFloat(document.getElementById("speed").textContent);
        console.log(windSpeed);

        let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * tempNumber * Math.pow(windSpeed, 0.16));
        windchill = Math.round(windchill);
        console.log(windchill);

        if (tempNumber<=50 && windSpeed >3){
            document.getElementById("chill").textContent = "Wind Chill is: " + windchill + "\xB0F";
        }
        else {
            document.getElementById("chill").textContent = "No Wind Chill"
        }