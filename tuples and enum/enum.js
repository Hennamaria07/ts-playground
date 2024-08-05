"use strict";
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions["Sunny"] = "sunny";
    WeatherConditions["Cloudy"] = "cloudy";
    WeatherConditions["Rainy"] = "rainy";
    WeatherConditions["Snowy"] = "snowy";
})(WeatherConditions || (WeatherConditions = {}));
var Numbers;
(function (Numbers) {
    Numbers[Numbers["One"] = 0] = "One";
    Numbers[Numbers["Two"] = 1] = "Two";
    Numbers[Numbers["Three"] = 2] = "Three";
    Numbers[Numbers["Four"] = 3] = "Four";
    Numbers[Numbers["Five"] = 4] = "Five";
    Numbers[Numbers["Six"] = 5] = "Six";
})(Numbers || (Numbers = {}));
const currentWeather = WeatherConditions.Sunny;
console.log(`The current weather is ${currentWeather}`);
console.log(WeatherConditions);
console.log(Numbers);
