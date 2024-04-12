// Generics

const func = (n: number): number => n

// if we pass string as parameter then we will get error

// so thats why we are using Generics

const myFunc = <customType>(n: customType): customType => n
// now we can pass string as parameter and also other type data as parameter

// example
type obj = { name: string; age: number }
const sampleFunc = <T>(n: T): T => n

const person: obj = {
  name: "Pratik",
  age: 21,
}
const ans = sampleFunc(person)
