/* Create one typescript application which contains one class named as Arithmetic.
Arithmetic class contains three characteristics (Class data members) as Number1, Number2.
Create one parametrised constructor which accept two values and assign it to Number1 and
Number2.
In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction ,
Multiplication and Division.
Addition method will add Number1 , Number2 & return result.
Subtraction method will subtract Number1 , Number2 & return result.
Multiplication method will multiply Number1 , Number2 & return result.
Division method will divide Number1 , Number2 & return result.
After designing the class create two objects of that class by providing some hardcoded value.
Call all the methods by using both the objects
*/


class Arithmetic {
     Number1: number;
     Number2: number;

     constructor(n1: number, n2: number){
        this.Number1 = n1;
        this.Number2 = n2;
     }

      Addition(num1: number, num2: number): number {

        return num1 + num2;
         
     }

     Subsrtaction(num1: number, num2: number): number{
         return num1 - num2;
     }

     Multilpication(num1: number, num2: number): number{
         return num1 * num2;
     }

     Division(num1: number, num2: number): number{
         return num1 / num2;
     }
}


var objArithmetic_1 = new Arithmetic(20, 10);


var intAddition = objArithmetic_1.Addition(20,10);
var intSub = objArithmetic_1.Subsrtaction(20,10);
var intMul = objArithmetic_1.Multilpication(20,10);
var intDiv = objArithmetic_1.Division(20,10);

console.log("Addition of 20 & 10 is : " + intAddition);
console.log("Subsrtaction of 20 & 10 is : " + intSub);
console.log("Multilpication of 20 & 10 is : " + intMul);
console.log("Division of 20 & 10 is : " + intDiv);



var intAddition = objArithmetic_1.Addition(30,10);
var intSub = objArithmetic_1.Subsrtaction(30,10);
var intMul = objArithmetic_1.Multilpication(30,10);
var intDiv = objArithmetic_1.Division(30,10);

console.log("Addition of 30 & 10 is : " + intAddition);
console.log("Subsrtaction of 30 & 10 is : " + intSub);
console.log("Multilpication of 30 & 10 is : " + intMul);
console.log("Division of 30 & 10 is : " + intDiv);