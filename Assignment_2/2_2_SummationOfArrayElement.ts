/*
    Write a typescript program which contains one function named as Summation. That function
    accepts array of numbers and returns the summation of each number from array.
    Input : 23 6 7 4 5 7
    Output : Addition is 52
*/

var arr1:number[] = new Array(6);
arr1 = [23, 6, 7, 4, 5, 7];

//Call Summation function and print result
console.log("Addition is " +Summation(arr1) )
function Summation(arr:number[]):number{

    let add: number = 0;

    for(let i = 0; i < arr.length; i++){
        add += arr[i];
    }

    return add;

}