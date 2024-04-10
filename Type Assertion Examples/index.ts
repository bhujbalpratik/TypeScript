interface person {
  [key: string]: string
}

const obj: person = {
  name: "Pratik",
  email: "pratik@gmail.com",
}

const getName = (): string => obj["name"]

const getEmail = (): string => obj["email"]

const getData = (key: "name" | "email"): string => obj[key]

// console.log(getData("name"))
console.log(getData("email"))
