/*
    Write a typescript program which contains one function named as Maximum. That function accepts
    array of numbers and returns the largest number from array.
    Input : 23 89 6 29 56 45 77 32
    Output : Maximum number is 89
*/


function Maximum(arr:number[]):number 
{  
    let max: number = 0;
    max = Math.max.apply(Math, arr);
    return max; 
} 

let arr1 : number[];

arr1 = [23, 89, 6, 29, 56, 45, 77, 32];

// Call the Maximum function
var max:number;
max = Maximum(arr1);

console.log(" Maximum number is  :"+max);