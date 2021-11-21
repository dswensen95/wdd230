const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8931403a89ba3eb3e71a808239b9d8cb&units=imperial";

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;

    const image = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const description = jsObject.weather[0].description;
    document.getElementById('imagesrc').textContent = image;
    document.getElementById('icon').setAttribute('src', image);
    document.getElementById('icon').setAttribute('alt', description);

});

 