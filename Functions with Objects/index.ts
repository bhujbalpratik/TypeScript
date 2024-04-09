interface objFormat {
  name: string
  price: number
  photo: string
  readonly id: string
}
type dataType = (object: objFormat) => void

const getData: dataType = (product) => {
  console.log(product)
}

const product: objFormat = {
  name: "Macbook",
  price: 280000,
  photo: "sampleurl",
  id: "123456",
}

getData(product)

// type themeMode = "light" | "dark"

// const mode: themeMode = "light"

// Never Type

const errorHandler = (): never => {
  throw new Error()
}
