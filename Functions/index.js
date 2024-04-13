// type funcType = (...m: number[]) => number[]
// const restFunc: funcType = (...n) => {
//   return n
// }
// console.log(restFunc(20, 30, 40, 50))
// Normal Function
var Addition = function (n1, n2) { return "n1 + n2"; };
Addition(10, 20);
// return type function
var returnAdd = function (n1, n2) { return n1 + n2; };
// const Ary: Array<number> = [1, 2, 3, 4, 5, 6]
var Ary = ["thor", "ironman", "spiderman"];
console.log(Ary.map(function (n) { return n; }));
