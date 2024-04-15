type user = {
  name: string
  email: string
  password: string
}
type admin = {
  username: string
  email: string
  password: string
}

let newUser: user | admin = {
  name: "pratik",
  email: "pb@gmail.com",
  password: "password",
}

console.log(newUser)

newUser = {
  username: "pratik",
  email: "pb@gmail.com",
  password: "password",
}
console.log(newUser)

const newFunc = (x: number | string) => {
  if (typeof x === "string") {
    return x.toUpperCase()
  }
  return x.toFixed()
}

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]

// if we want both string and number type array
const data3: (number | string)[] = [1, 2, 3, "4", 5, "6"]

const data4: (number | boolean | string)[] = [
  1,
  2,
  3,
  true,
  "pratik",
  "thor",
  false,
  "ironman",
]

//if you want to declare constant value
const pi: 3.14 = 3.14
