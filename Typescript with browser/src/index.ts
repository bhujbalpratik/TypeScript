// let num: number

// let str: string | number //union data types

// str = 10
// console.log(str)

// const func = (n1: number, n2: number): number => {
//   return n1 + n2
// }

// console.log(func(10, 20))

// type alias
type Addition = (n1: number, n2: number) => number

const Add: Addition = (n1, n2) => {
  return n1 + n2
}

console.log(Add(30, 20))
