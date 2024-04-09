var restFunc = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n;
};
console.log(restFunc(20, 30, 40, 50));
