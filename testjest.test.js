
import { capitalize } from "./testjest";
import {reverseString} from "./testjest";
import {calculator} from "./testjest";
import {caesarCipher} from "./testjest";
import {analyzeArray} from "./testjest";

test('capitalize: dog', () => {
    expect(capitalize('dog')).toBe('Dog');
});

test('capitalize: AlBINO', () => {
    expect(capitalize('AlBINO')).toBe('AlBINO');
});

test('capitalize: ', () => {
    expect(capitalize('')).toBe(0);
});

test('reverse: dog', () => {
    expect(reverseString('dog')).toBe('god');
});

test('reverse: albino', () => {
    expect(reverseString('albino')).toBe('onibla');
});


test('calculator: add', () => {
    expect(calculator.add(1,2)).toBe(3);
});

test('calculator: subtract', () => {
    expect(calculator.subtract(1,2)).toBe(-1);
});

test('calculator: multiply', () => {
    expect(calculator.multiply(1,2)).toBe(2);
});

test('calculator: divide', () => {
    expect(calculator.divide(1,2)).toBe(.5);
});

test('calculator: divide', () => {
    expect(calculator.divide(1,0)).toBe(0);
});


test('caeser: apple 2', () => {
    expect(caesarCipher('apple',2)).toBe("crrng");
});

test('caeser: apple 2', () => {
    expect(caesarCipher('kfrenM$d?',2)).toBe("mhtgpO$f?");
});


test('obj: [1,2,3,4,5]', () => {
    expect(analyzeArray([1,2,3,4,5]).min).toBe(1);
});

test('obj: [1,2,3,4,5]', () => {
    expect(analyzeArray([1,2,3,4,5]).average).toBe(3);
});

test('obj: [1,2,3,4,5]', () => {
    expect(analyzeArray([1,2,3,4,5]).max).toBe(5);
});


test('obj: [1,2,3,4,5]', () => {
    expect(analyzeArray([1,2,3,4,5]).length).toBe(5);
});


test('obj: [1,2,3,4,5]', () => {
    expect(analyzeArray([1,'d',2,3,4,5])).toBe(null);
});


