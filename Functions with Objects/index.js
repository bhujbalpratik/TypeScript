var getData = function (product) {
    console.log(product);
};
var product = {
    name: "Macbook",
    price: 280000,
    photo: "sampleurl",
    id: "123456",
};
getData(product);
// type themeMode = "light" | "dark"
// const mode: themeMode = "light"
// Never Type
var errorHandler = function () {
    throw new Error();
};
