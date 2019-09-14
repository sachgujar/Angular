
export class TestCapCountPassAndArraySum{
    countCapital(str){
        return str.replace(/[^A-Z]/g,"").length;
    }

    checkPassword(strEmail){
       
        // var regexp = new RegExp('^[1-9]\d{0,2}$');
        // var regexp = new RegExp('^[1-9]\d{0,2}$');
        var regexp = new RegExp('[1-9]{2,}[a-z]{3,}[A-Z]{3,}[!@#$%^&*()]+');
       return regexp.test(strEmail) // outputs true
    }

    ArrayAddition(arr){
        
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum = sum + arr[i];
        }
        return sum;
    }
}