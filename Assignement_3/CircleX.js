/* Create one typescript application which contains one class named as CircleX which sill
inherits above Circle class.
In CircleX class we have to write one method (Behaviours) as Circumference which will return
circumference of circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call Circumference and Area methods by using both the objects.
Piyush
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(intRad) {
        this.Radius = intRad;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        return this.PI * this.Radius * this.Radius;
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Curcumference = function () {
        return 2 * this.PI * this.Radius;
    };
    return CircleX;
}(Circle));
var objCircleX_1 = new CircleX(20);
var objCircleX_2 = new CircleX(30);
var intArea = objCircleX_1.Area();
var intCircumference = objCircleX_1.Curcumference();
console.log("Area of Circle is with Radius 20 : " + intArea);
console.log("Curcumference of Circle is with Radius 20 : " + intCircumference);
var intArea = objCircleX_2.Area();
intCircumference = objCircleX_2.Curcumference();
console.log("Area of Circle is with Radius 30 : " + intArea);
console.log("Curcumference of Circle is with Radius 30 : " + intCircumference);
