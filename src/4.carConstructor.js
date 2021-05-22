'use strict'

function Car(model, milesPerGallon) {
  this.model = model
  this.milesPerGallon = milesPerGallon
  this.tank = 0
  this.odometer = 0
  this.fill = function fill(gallons) {
    this.tank =
      this.tank + gallons > milesPerGallon
        ? milesPerGallon
        : this.tank + gallons

    return this.tank
  }
  this.drive = function drive(distance) {
    if (distance < this.tank) {
      this.tank -= distance
      this.odometer += distance

      return `My tank:: ${this.tank}, My odometer:: ${this.odometer}`
    } else {
      return `Iran out of fuel at ${this.odometer + distance} miles!`
    }
  }
}

const merc = new Car('Mercedes E320', 150)
console.log(merc.fill(100))
console.log(merc.drive(50))
console.log(merc.drive(25))
console.log(merc.fill(125))
console.log(merc.drive(50))
