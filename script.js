//* ES6

class Weather {
  constructor(temperature, precipitation, description) {
    this.temperature = temperature;
    this.precipitation = precipitation;
    this.description = description;
  }

  displayInfo() {
    console.log(
      ` Weather: ${this.temperature}, ${this.precipitation}, ${this.description} `
    );
  }
}
class DayWeather extends Weather {
  constructor(
    temperature,
    precipitation,
    description,
    dayOfWeek,
    specialAlerts
  ) {
    super(temperature, precipitation, description);
    this.dayOfWeek = dayOfWeek;
    this.specialAlerts = specialAlerts;
  }
   displayInfo() {
    console.log(`Day of the week: ${this.dayOfWeek}`);
    console.log(`Special Alerts: ${this.specialAlerts}`);
    super.displayInfo();
   }
}

// Instantiate the Weather class for general conditions
const generalWeather = new Weather(25, 'Partly Cloudy', 'Mild');

// Instantiate the DayWeather class for specific day's conditions
const mondayWeather = new DayWeather(20, 'Sunny', 'Clear skies', 'Monday', 'No alerts');

// Display Weather Information
console.log("General Weather Information:");
generalWeather.displayInfo();

console.log("\nMonday's Weather Information:");
mondayWeather.displayInfo();