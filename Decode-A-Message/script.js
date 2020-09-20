const sampleString = "18,12312,171,763,98423,1208,216,11,500,18,241,0,32,20620,27,10";

let decodingModes = {
    UPPERCASE : "uppercase",
    LOWERCASE : "lowercase",
    PUNCTUATION : "punctuation"
};

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let punctuations = "!?,. ;\"\'";

let currentMode = decodingModes.UPPERCASE;

function decode(encodedString){
    let solution = "";
    while(encodedString.indexOf(",") > 0){
        //read the string up until we reach a coma
        let indexOfEndOfLetter = encodedString.indexOf(",");
        //store the contents up until the comma to a temporary variable sub. remove them from original string
        let sub = encodedString.substring(0,indexOfEndOfLetter);

        encodedString = encodedString.substring(indexOfEndOfLetter +1);

        //store the modulus
        let mod = sub % getModuleFromMode(currentMode);

        //check if modulus is 0 and call the pickNextMode if it is
        if(mod === 0){
            pickNextMode();
            continue;
        }

        //decode the sub and append it to result
        sub = convertToLetters(mod);
        solution += sub;
    }
    //once all commas are gone, add the last bit of the string to the result
    let mod = encodedString % getModuleFromMode(currentMode);
    encodedString = convertToLetters(mod);

    solution += encodedString;
    return solution;
}

function getModuleFromMode(mode){
    return (mode === decodingModes.PUNCTUATION)? 9 : 27;
}

function pickNextMode(){
    if(currentMode === decodingModes.UPPERCASE){
        currentMode = decodingModes.LOWERCASE;
    }
    else if(currentMode === decodingModes.LOWERCASE){
        currentMode = decodingModes.PUNCTUATION;
    }
    else{
        currentMode = decodingModes.UPPERCASE;
    }
}

function convertToLetters(mod){

    return (currentMode === decodingModes.UPPERCASE)? 
    alphabet.charAt(mod-1).toUpperCase():
    (currentMode === decodingModes.LOWERCASE)?
    alphabet.charAt(mod-1): punctuations.charAt(mod-1); 
}

console.log(decode(sampleString));