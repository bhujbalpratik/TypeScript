type ary = {
  readonly array: Array<number>
}

const Arr: ary = {
  array: [10, 20, 30],
}

Arr.array.push(50)

// console.log(Arr.array)

type User = {
  name: string
  email: string
  crediCard?: {}
}

const user: User = {
  name: "pratik",
  email: "pb@gmail.com",
}
