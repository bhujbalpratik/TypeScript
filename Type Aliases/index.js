var createUser = function (user) {
    return user;
};
console.log(createUser({ name: "pratik", email: "pb@gmail.com", isActive: true }));
var Add = function (pt) {
    pt.z = pt.x + pt.y;
    return pt.z;
};
console.log(Add({ x: 10, y: 20 }));
