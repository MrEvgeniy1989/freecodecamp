function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Thermostat {
        constructor(fahrenheit) {
            this.fahrenheit = fahrenheit;
        }
        get temperature() {
            return 5 / 9 * (this.fahrenheit - 32);
        }
        set temperature(celsius) {
            this.fahrenheit = celsius * 9 / 5 + 32;
        }
    }
    /* Alter code above this line */
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;