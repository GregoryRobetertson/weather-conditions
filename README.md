# weather-conditions

This repository contains ES6 classes for representing weather conditions. The two main classes are `Weather` and `DayWeather`, each serving a specific purpose.

## Weather Class

The `Weather` class represents general weather conditions. It has the following properties:

- `temperature`: Temperature in Celsius.
- `precipitation`: Type of precipitation (e.g., Sunny, Rainy, Snowy).
- `description`: Additional description of the weather conditions.

### Methods

#### `constructor(temperature, precipitation, description)`

Initializes a new instance of the `Weather` class with the provided temperature, precipitation, and description.

#### `displayInfo()`

Displays the weather information to the console.

Example Output:
```javascript
const generalWeather = new Weather(25, 'Partly Cloudy', 'Mild');
generalWeather.displayInfo();
// Output: Weather: 25°C, Partly Cloudy, Mild
