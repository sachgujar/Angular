/*
    Write a typescript program which contains one function named as Maximum. That function accepts
    array of numbers and returns the second largest number from array.
    Input : 23 89 6 29 56 45 77 32
    Output : Second Maximum number is 77
*/
var arr1 = new Array(8);
arr1 = [23, 89, 6, 29, 56, 45, 77, 32];
var secMax = Maximum(arr1);
console.log("Second Maximum number is :" + secMax);
function Maximum(arr) {
    var secondMax = 0;
    var firstMax = 0;
    for (var i = 0; i < arr.length; i++) {
        // If cureent element is greater than first then update both element
        if (arr[i] > firstMax) {
            firstMax = arr[i];
            secondMax = firstMax;
        }
        // If current element is in between first and second then update second
        else if (arr[i] > secondMax && arr[i] != firstMax) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
