let user: [number, string, boolean]
// user=["pratik",true,13]  //not allowed
user = [121, "pratik", true]

const rgb: [number, number, number] = [121, 255, 122]
// tuples follows order of type definition

type User = [number, string]

const newUser: User = [122, "pb@gmail.com"]

newUser[1] = "pbc@gmail.com"
// newUser.push()
