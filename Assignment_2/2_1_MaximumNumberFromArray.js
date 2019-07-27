/*
    Write a typescript program which contains one function named as Maximum. That function accepts
    array of numbers and returns the largest number from array.
    Input : 23 89 6 29 56 45 77 32
    Output : Maximum number is 89
*/
function Maximum(arr) {
    var max = 0;
    max = Math.max.apply(Math, arr);
    return max;
}
var arr1;
arr1 = [23, 89, 6, 29, 56, 45, 77, 32];
// Call the Maximum function
var max;
max = Maximum(arr1);
console.log(" Maximum number is  :" + max);
