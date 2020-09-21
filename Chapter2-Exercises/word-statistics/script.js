const testString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec sem nisl. Sed vitae euismod mi, convallis aliquet sem. Aliquam ornare tincidunt accumsan. Donec condimentum pulvinar dolor et placerat. Cras ornare, nibh et consequat tempus, purus odio sodales erat, et imperdiet risus sem a libero. Nunc a ultrices odio, a interdum eros. Sed id dictum velit. Donec nec magna nisl. Suspendisse vestibulum sed magna eget facilisis. Etiam nisl ex, maximus quis facilisis vitae, porta id massa. Donec finibus, orci non scelerisque finibus, turpis nisi venenatis lorem, eget placerat augue quam non dui. Donec hendrerit quam risus, efficitur iaculis orci pharetra ac. Aliquam tristique lacinia justo, at imperdiet metus. "
const testString2 = "Hello world";


function analyzeText(text){
    countWords(text);
    countLetters(text);
    countWhitespace(text);
    countPunctuations(text);
    countLongestAndShortestWords(text);
    countVowels(text);
}

function countWords(text){
    let noPunctuation = punctuationRemover(text);
    let words = noPunctuation.split(" ");
    console.log(`Total amount of words = ${words.length}`);
}

function countLetters(text){
    console.log(`Total amount of characters = ${removeWhitespace(punctuationRemover(text)).length}`);
}

function countWhitespace(text){
    text = punctuationRemover(text);
    let textArray = text.split("");

    let total = 0;

    textArray.forEach((character) =>{
        if(character === " "){
            total++;
        }
    });

    console.log(`Total number of spaces = ${total}`);
}

function countPunctuations(text){
    var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

    let textArray = text.split("");

    let total = 0;

    textArray.forEach((character)=>{
        if(punctuation.includes(character)){
            total++;
        }
    });

    console.log(`Total number of punctuation = ${total}`);
}

function countLongestAndShortestWords(text){
    let shortestWord = "";
    let shortestWordSize = 500;

    let longestWord = "";
    let longestWordSize = 0;

    text = punctuationRemover(text);
    let textArray = text.split(" ");

    console.log(textArray);

    textArray.forEach((word)=>{
        if(word.length > longestWordSize){
            longestWordSize = word.length;
            longestWord = word;
        }
        if(word.length < shortestWordSize && word.length > 0){
            shortestWordSize = word.length;
            shortestWord = word;
        }
    });

    console.log(`The longest word is: "${longestWord}" with ${longestWordSize} letters`);
    console.log(`The shortest word is: "${shortestWord}" with ${shortestWordSize} letters`);
}

function countVowels(text){
    const vowels = "aeiouy";

    let mostVowels = "";
    let mostVowelsSize = 0;

    text = punctuationRemover(text);
    let textArray = text.split(" ");

    textArray.forEach((word)=>{
        let vowelCount = 0;
        let letters = word.split("");

        letters.forEach((letter)=>{
            if(vowels.includes(letter)){
                vowelCount++;
            }
        });

        if(vowelCount > mostVowelsSize){
            mostVowelsSize = vowelCount;
            mostVowels = word;
        }
    });

    console.log(`The word with the most vowels is "${mostVowels}" with ${mostVowelsSize} vowels`);
}

function punctuationRemover(text){
    var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

    return text.split('').filter(function(letter) {
      return punctuation.indexOf(letter) === -1;
    }).join('');

}

function removeWhitespace(text){
    return text.replace(/\s/g, "");
}

analyzeText(testString);