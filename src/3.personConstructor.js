'use strict'

function Person(name, age) {
  this.name = name
  this.age = age
  this.stomach = []
  this.toString = function () {
    return `${this.name}, ${this.age}`
  }
  this.eat = function (food) {
    if (this.stomach.length < 10) {
      this.stomach.push(food)
      return this.stomach
    } else {
      return `Stomach is full`
    }
  }
  this.poop = function () {
    this.stomach.length = 0
    return this.stomach
  }
}

const newPerson = new Person('Hakob', 17)
console.log(newPerson.eat('Popcorn'))
console.log(newPerson.eat('Sushi'))
console.log(newPerson.eat('Beer'))
console.log(newPerson.eat('Matsun'))
console.log(newPerson.poop())
console.log(newPerson.toString())

const newPerson2 = new Person('Gavrosh', 55)
console.log(newPerson2.eat('Plav'))
console.log(newPerson2.poop())
console.log(newPerson2.toString())
