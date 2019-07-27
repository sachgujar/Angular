/* CCreate one typescript application which contains one class named as Circle.
Circle class contains two characteristics (Class data members) as Radius, PI.
Create one parametrised constructor which accept one value and assign it to Radius. Value of
PI member is set to 3.14.
In Circle class we have to one method (Behaviours) as Area which will return area of Circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call the method Area by using both the objects.
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


var objCircle_1 = new Circle(20);
var objCircle_2 = new Circle(30);


var intArea = objCircle_1.Area();
console.log("Area of Circle is with Radius 20 : " + intArea);

var intArea = objCircle_2.Area();
console.log("Area of Circle is with Radius 30 : " + intArea);