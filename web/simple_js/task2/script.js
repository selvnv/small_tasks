function getWeather() {

    function getRandomIndex(collectionLength) {
        return Math.floor(Math.random() * collectionLength);
    }

    const weatherObject = {};

    const windPossibleValues = ['windy', 'no wind', 'storm'];
    const rainPossibleValues = ['no rain', 'rainy', 'heavy rain'];

    weatherObject.wind = windPossibleValues[getRandomIndex(windPossibleValues.length)];
    weatherObject.rain = rainPossibleValues[getRandomIndex(rainPossibleValues.length)];

    return weatherObject;
}

(() => {
    const username = prompt("Enter you name here");

    const randomWeatherObject = getWeather();
    if (randomWeatherObject?.wind == 'storm' || randomWeatherObject?.rain == 'heavy rain') {
        alert(`Hello, ${username}, the weather is not good for a walk. It's ${randomWeatherObject?.wind} and ${randomWeatherObject?.rain}`);
    } else {
        alert(`Hello, ${username}, the weather nice, go outside. It's ${randomWeatherObject?.wind} and ${randomWeatherObject?.rain}`);
    }
})();