'use strict'

function Person(name, age) {
  this.name = name
  this.age = age
}

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age)
  this.favoriteToy = favoriteToy
  this.play = function play () {
    return `Playing with ${this.favoriteToy}`
  }
}

Baby.prototype = Object.create(Person.prototype)

const baby = Baby('Likulik', 2, 'Minion')
console.log(baby)
