type funcType = (...m: number[]) => number[]

const restFunc: funcType = (...n) => {
  return n
}

console.log(restFunc(20, 30, 40, 50))
