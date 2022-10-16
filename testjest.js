
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






