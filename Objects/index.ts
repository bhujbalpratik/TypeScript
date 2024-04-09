// const obj: {
//   height: number
//   weight: number
//   name: string
// } = {
//   height: 154,
//   weight: 48,
//   name: "Pratik",
// }

// type Obj = {
//   height: number
//   weight: number
//   gender?: boolean // ? means optional
// }
interface Obj {
  height: number
  weight: number
  gender?: boolean
}

type funcType = (n1: number, n2: number) => void

interface newObj extends Obj {
  scholar: boolean
  func: funcType
}

const obj: Obj = {
  height: 167,
  weight: 34,
  gender: true,
}

const obj2: Obj = {
  height: 167,
  weight: 34,
}

const obj3: newObj = {
  height: 188,
  weight: 67,
  gender: true,
  scholar: true,
  func: (n, m) => {
    return n + m
  },
}

console.log(obj3.func(10, 20))
