
export function capitalize(string){
    if(typeof string == typeof "dog" && string != ""){
    let newString = string.split('');
    newString[0] = (newString[0].toUpperCase());
    return(newString.join(''));
    }
    else {
        return(0);
    }
}

export function reverseString(string){
    let newString = [];
    for(let i = string.length - 1; i >= 0 ; i--){
        newString.push(string[i]);
    }
    return(newString.join(''));
}

export const calculator = {
    add: function add(num1,num2){
        if(typeof num1 == typeof num2 && typeof num1 == typeof 1)
    {
        return(num1+num2);
    }
    else {
        return(0);
    }
    },
    subtract: function subtract(num1,num2){
        if(typeof num1 == typeof num2 && typeof num1 == typeof 1)
    {
        return(num1-num2);
    }
    else {
        return(0);
    }},
    multiply: function multiply(num1,num2){
        if(typeof num1 == typeof num2 && typeof num1 == typeof 1)
    {
        return(num1*num2);
    }
    else {
        return(0);
    }},    
    divide: function divide(num1,num2){
        if(typeof num1 == typeof num2 && typeof num1 == typeof 1 && num2 != 0)
    {
        return(num1/num2);
    }
    else {
        return(0);
    }}
}


// inspiration for caeser code:
//https://github.com/mooniiDev/testing-practice/blob/main/scripts/caesarCipher.js

export function caesarCipher(string,offset){

    let array = [...string];
    let res = [];

    for(let char of array){
        if(isLetter(char)){
            let def = char.toLowerCase().charCodeAt(0);
            let shifted = (((def - 97 + offset) % 26) + 97);
            let newchar = String.fromCharCode(shifted);

            if(isUpperCase(char)){
                res.push(newchar.toUpperCase());
            }
            else{
                res.push(newchar);
            }
        }
        else{
            res.push(char);
        }
    }
    return(res.join(''));
}

function isLetter(char){
    return (char.match(/[A-Za-z]/));
}

function isUpperCase(char){
    return(char == char.toUpperCase());
}


//inspiration credit check if array contains only numbers
//https://bobbyhadz.com/blog/javascript-check-if-array-contains-only-numbers#:~:text=To%20check%20if%20an%20array,only%20numbers%20and%20false%20otherwise.

export function analyzeArray(array){

    if(onlyNumbers(array) == false){
        return(null);
    }

    let object = {
        average: getAverage(array),
        min: getMin(array),
        max: getMax(array),
        length: getLength(array)
    }

    function getAverage(array){
        let counter = 0;
        for(let i = 0; i < array.length; i++){
            counter = counter + array[i];
        }
        return(counter / array.length);
    }

    function getMin(array){
        let counter = array[0];
        for(let i = 0; i < array.length; i++){
            if(array[i] < counter){
                counter = array[i];
            }
        }
        return(counter);
    }
    function getMax(array){
        let counter = array[0];
        for(let i = 0; i < array.length; i++){
            if(array[i] > counter){
                counter = array[i];
            }
        }
        return(counter);
    }
    function getLength(array){
        return(array.length);
    }

    function onlyNumbers(array) {
        return array.every(item => {
          return typeof item === 'number';
        });
      }

    return(object);
}

