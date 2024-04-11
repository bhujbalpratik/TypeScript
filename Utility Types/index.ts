// Partial <Type>
type User = {
  name: string
  email: string
}
// if we want use types in optional
type User2 = Partial<User>

// Required
type Product = {
  name?: string
  price?: string
}
// opposite of partial
// if we want use all required types
type Product2 = Required<Product>

// Readonly
type Player = {
  name: string
  injured: boolean
}
// if we want All properties Readonly
const PlayerStatus: Readonly<Player> = {
  name: "Pratik",
  injured: false,
}

// Record
interface userInfo {
  age: number
}

type userName = "pratik" | "ganesh" | "pooja" | "prapti"

const users: Record<userName, userInfo> = {
  pratik: { age: 21 },
  prapti: { age: 19 },
  ganesh: { age: 19 },
  pooja: { age: 25 },
}
// Record use to add types and interface abilities in one

// Pick
interface orderInfo {
  user: string
  city: string
  state: string
  country: string
  status: string
}

type shippingInfo = Pick<orderInfo, "city" | "state" | "country">
// if we want few types from interface we will use Pick

// Omit
interface shippingInfo1 {
  country: string
  state: string
  city: string
}

type random = Omit<shippingInfo, "country">
// it is opposite from Pick it removes one type which we not need

// Exclude
type Union = string | number | boolean

type UnionRandom = Exclude<Union, boolean>
// If we want dont want some type from another type

// Extract
type myUnion = string | number | boolean

type myUnionRandom = Extract<Union, boolean>
// If we want only one type from another type

// Nonnullable
type myUnion1 = string | boolean | number | null | undefined

type myUnion2Random = NonNullable<myUnion1>
// it removes null and undefined from your types

// Parameter
const func = (a: number, b: number): number => {
  return a + b
}

type funcType = Parameters<typeof func>
// It gives parameter types

// ReturnType
const myFunc = (a: number, b: number): number => {
  return a + b
}

type funcReturnType = ReturnType<typeof myFunc>
// It gives return type

// ConstructorParameters
class pb {
  constructor(
    public s: number,
    public p: string,
    private t: string
  ) {}
}

type classTypes = ConstructorParameters<typeof pb>
// It gives constructor parameter types

// InstanceType

type Random = InstanceType<typeof pb>
// It gives class instance types
