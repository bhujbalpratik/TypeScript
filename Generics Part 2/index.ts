const myfunc1 = (val: string | number): string | number => {
  return val
}
const myfunc2 = (val: any): any => {
  return "nothing"
}
const myfunc3 = <Type>(val: Type): Type => {
  return val
}

const myfunc4 = <T>(val: T): T => {
  return val
}

myfunc4(33)
