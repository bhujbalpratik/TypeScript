// type funcType = (...m: number[]) => number[]

// const restFunc: funcType = (...n) => {
//   return n
// }

// console.log(restFunc(20, 30, 40, 50))

// Normal Function
const Addition = (n1: number, n2: number) => "n1 + n2"

Addition(10, 20)

// return type function
const returnAdd = (n1: number, n2: number): number => n1 + n2

// const Ary: Array<number> = [1, 2, 3, 4, 5, 6]
const Ary: Array<string> = ["thor", "ironman", "spiderman"]
console.log(Ary.map((n) => n))
