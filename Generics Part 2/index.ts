// const myfunc1 = (val: string | number): string | number => {
//   return val
// }
// const myfunc2 = (val: any): any => {
//   return "nothing"
// }
// const myfunc3 = <Type>(val: Type): Type => {
//   return val
// }

// const myfunc4 = <T>(val: T): T => {
//   return val
// }

// myfunc4(33)

// ***************************************Genrics in Array and Arrow Function**********************************************

interface Bootle {
  brand: string
  type: number
}

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3
  return products[myIndex]
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 4
  return products[myIndex]
}
