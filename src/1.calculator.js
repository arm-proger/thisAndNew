'use strict'

function Calculator() {
  // Summary
  this.add = function (num1, num2) {
    return num1 + num2
  }
  // Subtract
  this.subtract = function (num1, num2) {
    return num1 - num2
  }
  // Multiply
  this.multiply = function (num1, num2) {
    return num1 * num2
  }
  // Divide
  this.divide = function (num1, num2) {
    return num1 / num2
  }
}

const calculator = new Calculator()
console.log(calculator.add(10, 5))
console.log(calculator.subtract(10, 5))
console.log(calculator.multiply(10, 5))
console.log(calculator.divide(10, 5))

const calculator2 = new Calculator()
console.log(calculator.add(2, 5))
console.log(calculator.subtract(2, 5))
console.log(calculator.multiply(2, 5))
console.log(calculator.divide(2, 5))
