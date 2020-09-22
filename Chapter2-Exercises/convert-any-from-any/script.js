function convert(number, baseFrom = 10, baseTo = 2){
    let numberArray = number.split("");

    if(baseFrom != 10){
        number = convertToDecimal(numberArray, baseFrom);
    }
    else{
        number = +number;
    }

    let result = convertFromDecimal(number,baseTo);

    console.log(result);

    return result;
}

function convertToDecimal(numberArray, baseFrom){
    //reverse the array
    numberArray = numberArray.reverse();
    //convert letters to numbers
    let newArray = [];
    if(baseFrom > 10){
        numberArray.forEach((digit)=>{
            switch(digit){
                case "a":
                    digit = "10";
                    break;
                case "b":
                    digit ="11";
                    break;
                case "c":
                    digit = "12";
                    break;
                case "d":
                    digit = "13";
                    break;
                case "e":
                    digit = "14";
                    break;
                case "f":
                    digit = "15";
                    break;
            }
            newArray.push(digit);
        });
        
    }
    //convert to decimal
    let result = 0;
    for(let i = 0; i < newArray.length; i++){
        let power = Math.pow(baseFrom,i);
        result += +newArray[i] * power;
    }

    return result;

}

function convertFromDecimal(number, baseTo){
    let resultingArray = [];

    while(Math.floor(number/baseTo) != 0){
        resultingArray.push(number % baseTo);
        number = Math.floor(number/baseTo);
    }
    resultingArray.push(number);
    resultingArray.reverse();

    //convert numbers to letters
    let tempArray = []
    if(baseTo > 10){
        resultingArray.forEach((digit)=>{
            switch(digit){
                case 10:
                    digit = "a";
                    break;
                case 11:
                    digit ="b";
                    break;
                case 12:
                    digit = "c";
                    break;
                case 13:
                    digit = "d";
                    break;
                case 14:
                    digit = "e";
                    break;
                case 15:
                    digit = "f";
                    break;
            }
            tempArray.push(digit);
        });
        resultingArray = tempArray;
    } 
    return resultingArray.join("");
}

convert("ff",16,10);