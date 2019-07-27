/* Create one typescript application which contains one class named as CircleX which sill
inherits above Circle class.
In CircleX class we have to write one method (Behaviours) as Circumference which will return
circumference of circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call Circumference and Area methods by using both the objects.
Piyush
*/


class Circle {
     Radius: number;
     PI: number;

     constructor(intRad: number){
        this.Radius = intRad;
        this.PI = 3.14;
     }

      Area(): number {

        return this.PI * this.Radius * this.Radius;
         
     }
}

class CircleX extends Circle{

   Curcumference(): number{

      return 2 * this.PI * this.Radius;

   }
}


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