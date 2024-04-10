var obj = {
    name: "Pratik",
    email: "pratik@gmail.com",
};
var getName = function () { return obj["name"]; };
var getEmail = function () { return obj["email"]; };
var getData = function (key) { return obj[key]; };
// console.log(getData("name"))
console.log(getData("email"));
