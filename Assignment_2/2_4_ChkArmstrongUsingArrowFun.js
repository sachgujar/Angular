/*
    Write a typescript program which contains one arrow function named as ChkArmstrong. That
    function accepts one numbers and check whether number is Armstrong number or not.
    Input : 153
    Output : It is Armstrong number
*/
var num1 = 153;
console.log(num1 / 10);
var ChkArmstrong = function (num) {
    var rem = 0;
    var sum = 0;
    console.log("num" + num);
    var temp = num;
    while (num != 0) {
        rem = num % 10;
        console.log("rem" + rem);
        sum = sum + (rem * rem * rem);
        console.log("sum" + sum);
        num = num / 10;
        console.log("num" + num);
    }
    console.log("sum" + sum);
    if (num == temp) {
        return true;
    }
    else {
        return false;
    }
};
if (ChkArmstrong(num1)) {
    console.log(num1 + " is Armstrong number.");
}
else {
    console.log(num1 + " is not Armstrong number.");
}
