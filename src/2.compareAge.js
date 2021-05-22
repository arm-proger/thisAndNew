function Person(name, age) {
  const person = {
    name,
    age,
    compareAge(obj) {
      if (this.age < obj.age) {
        return `${obj.name} is older than me.`
      } else if (this.age > obj.age) {
        return `${obj.name} is younger than me.`
      } else {
        return `${obj.name} is the same age as me.`
      }
    },
  }

  return person
}

const p1 = Person('Samuel', 24)
const p2 = Person('Joel', 36)
const p3 = Person('Lily', 24)
console.log(p1.compareAge(p2)) //"Joel is older than me."
console.log(p2.compareAge(p1)) //"Samuel is younger than me."
console.log(p1.compareAge(p3)) //"Lily is the same age as me."
