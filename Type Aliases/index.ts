type User = {
  name: string
  email: string
  isActive: boolean
}

const createUser = (user: User): User => {
  return user
}

console.log(
  createUser({ name: "pratik", email: "pb@gmail.com", isActive: true })
)

type Point = {
  x: number
  y: number
  z?: number
}

const Add = (pt: Point): number => {
  pt.z = pt.x + pt.y
  return pt.z
}

console.log(Add({ x: 10, y: 20 }))
