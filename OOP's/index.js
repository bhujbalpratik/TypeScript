var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var player = /** @class */ (function () {
    function player(height, weight, injured) {
        this.height = height;
        this.weight = weight;
        this.injured = injured;
    }
    Object.defineProperty(player.prototype, "getHeight", {
        get: function () {
            return this.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(player.prototype, "setHeight", {
        set: function (n) {
            this.height = n;
        },
        enumerable: false,
        configurable: true
    });
    return player;
}());
var playerStatus = /** @class */ (function (_super) {
    __extends(playerStatus, _super);
    function playerStatus(height, weight, injured, gender) {
        return _super.call(this, height, weight, injured) || this;
    }
    return playerStatus;
}(player));
// const obj = new player(153, 64, true)
// console.log(`Default Height : ${obj.getHeight}`)
// obj.setHeight = 167
// console.log(`New Height : ${obj.getHeight}`)
var obj = new playerStatus(153, 67, false, "male");
