// Exercise 1: trimProperties
function trimProperties(obj) {
  const trimmedObj = {};
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      trimmedObj[key] = obj[key].trim();
    } else {
      trimmedObj[key] = obj[key];
    }
  }
  return trimmedObj;
}

// Exercise 2: trimPropertiesMutation
function trimPropertiesMutation(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = obj[key].trim();
    }
  }
  return obj;
}

// Exercise 3: findLargestInteger
function findLargestInteger(arr) {
  return Math.max(...arr.map(item => item.integer));
}

// Exercise 4: Counter
class Counter {
  constructor(initialCount) {
    this.count = initialCount;
  }

  countDown() {
    if (this.count > 0) {
      return this.count--;
    }
    return 0;
  }
}

// Exercise 5: Seasons
class Seasons {
  constructor() {
    this.seasons = ['summer', 'fall', 'winter', 'spring'];
    this.index = 0;
  }

  next() {
    const result = this.seasons[this.index % this.seasons.length];
    this.index++;
    return result;
  }
}

// Exercise 6: Car
class Car {
  constructor(model, gasTankSize, milesPerGallon) {
    this.model = model;
    this.gasTankSize = gasTankSize; // Maximum gas tank capacity in gallons
    this.milesPerGallon = milesPerGallon;
    this.odometer = 0; // Total miles driven
    this.gas = gasTankSize; // Current level of gas in the tank, starts full
  }

  drive(miles) {
    const possibleMiles = this.gas * this.milesPerGallon;
    const drivenMiles = Math.min(miles, possibleMiles);
    this.odometer += drivenMiles;
    this.gas -= drivenMiles / this.milesPerGallon;
    return this.odometer;
  }

  refuel(gallons) {
    this.gas = Math.min(this.gas + gallons, this.gasTankSize);
  }
}

// Exercise 7: isEvenNumberAsync
async function isEvenNumberAsync(number) {
  return number % 2 === 0;
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  Counter,
  Seasons,
  Car,
  isEvenNumberAsync,
};
