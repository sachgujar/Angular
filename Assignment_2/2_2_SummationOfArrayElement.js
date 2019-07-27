/*
    Write a typescript program which contains one function named as Summation. That function
    accepts array of numbers and returns the summation of each number from array.
    Input : 23 6 7 4 5 7
    Output : Addition is 52
*/
var arr1 = new Array(6);
arr1 = [23, 6, 7, 4, 5, 7];
//Call Summation function and print result
console.log("Addition is " + Summation(arr1));
function Summation(arr) {
    var add = 0;
    for (var i = 0; i < arr.length; i++) {
        add += arr[i];
    }
    return add;
}
