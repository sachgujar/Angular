/*
    Write a typescript program which contains one function named as ChkString. That function accept
    one string and check whether that string contains “Marvellous” word or not.
    Input : “Pune Kothrud Marvellous Infosystems”
    Output : String contains Marvellous in it.
*/
var str = "Pune Kothrud Marvellous Infosystems";
var subStr = "/" + "Marvellous" + "/";
console.log(typeof subStr);
if (ChkString(str, subStr)) {
    console.log("String contains " + subStr + " in it.");
}
else {
    console.log("String does not contains " + subStr + " in it.");
}
function ChkString(str, subStr) {
    return subStr.test(str);
}
