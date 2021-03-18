// Generator Functions

// Function that returns a random index (number) of a string value that is passed in as an argument
function randomIndex(str){
    return Math.floor(Math.random() *  str.length);
}

// Functions taht returns a random letter using a random index in the "letter" string variable
function randomLetter(){
    const letters = `abcdefghijklmnopqrstuvwxyz`;
    return letters[randomIndex(letters)];
}

function getRandomUpper(){
    // Running the "randomLetter" function to create a random letter and setting that value to the letter variable
    const letter = randomLetter();
    // Changing the letter to an Upperase letter and returning it from the function
    return letter.toUpperCase();
}
console.log(getRandomUpper());

function getRandomLower(){
    // Running the "randomLetter" function to create a random letter and returning it from the function
    return randomLetter();
}
console.log(getRandomLower());

function getRandomNumber(){
    const numbers = `1234567890`;
    // Return a random number using a random index in the "numbers" string
    return numbers[randomIndex(numbers)];
}
console.log(getRandomNumber());

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    // Return a random symbol using a random index in the "symbols" string
    return symbols[randomIndex(symbols)];
}
console.log(getRandomSymbol());