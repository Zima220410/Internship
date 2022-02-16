// 1..... Написать функцию которая проверяет являются две строки анаграммой или нет
function stringsAreAnagram(strOne, strTwo) {
    if (typeof strOne !== 'string' && strTwo !== 'string') {
        throw new Error('Error, argument is not a string');
    }
    if (strOne.length !== strTwo.length) {
        return false;
    }
    for (let i = 0; i < strOne.length; i++) {
        let lengthOne = 0;
        for (let j = 0; j < strOne.length; j++) {
            if (strOne[i] === strOne[j]) {
                lengthOne++;
            }
        }
        let lengthTwo = 0;
        for (let j = 0; j < strOne.length; j++) {
            if (strOne[i] === strTwo[j]) {
                lengthTwo++;
            }
        }
        if (lengthOne !== lengthTwo) {
            return false;
        }
    }
    return true;
}

// 3. Написать функцию которая вычисляет подсчет количество цифр в числе. 
function findLengthNumber(num) {
    if (typeof num !== 'number') {
        throw new Error('Error, argument is not a number');
    }
    let count = 1;
    while ((num /= 10) >= 1) {
        count++;
    }
    return count;
}

// 3.... Написать функцию которая вычисляет подсчет количество цифр в числе. Рекурсия.
function findLengthNumberRecurs(num, count) {
    count = count || 1;
    if (typeof num !== 'number') {
        throw new Error('Error, argument is not a number');
    }
    if ((num /= 10) >= 1) {
        return findLengthNumberRecurs(num, ++count);
    }
    return count;
}

// 4.... Реализовать функцию которая проверяет, является ли строка палиндромом.
function isStringPalindrom(str) {
    if (typeof str !== 'string') {
        throw new Error('Error, argument is not a string');
    }
    for (let i = 0; i <= str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// 5.... Написать функцию которая вычисляет подсчет уникальных слов в предложении
function numberUniqueWords(str) {
    if (typeof str !== 'string') {
        throw new Error('Error, argument is not a string');
    }
    let arr = [];
    let temp = '';
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == ' ') {
            arr.push(temp);
            i++;
            temp = '';
        } else if (i == str.length) {
            arr.push(temp);
        }
        temp += str[i];
    }
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            obj[arr[i]]++;
        }
        obj[arr[i]] = 1;
    }
    let count = 0;
    for (let item in obj) {
        count++;
    }
    return count;
}

// 6..... Написать функцию которая вычисляет вхождение каждого слова в предложение
function calcNumberOccurrencesWords(str) {
    return getObjUniqueWords(sortSplitArrey(str));
}

// 7. Вычислить периметр и площадь для прямоугольника, треугольника и круга. С помощью конструктора и классов.
class Rectangle {
    constructor(width, heigth) {
        if (typeof (width && heigth) !== 'number' && (width && heigth) < 0) {
            throw new Error('Error, invalid data sent');
        }
        this.width = width;
        this.heigth = heigth;
    }
    square() {
        return this.width * this.heigth;
    }
    perimeter() {
        return (this.width + this.heigth) * 2;
    }
}

class RightTriangle {
    constructor(firstLeg, secondLeg) {
        if (typeof (firstLeg && secondLeg) !== 'number' && (firstLeg && secondLeg) < 0) {
            throw new Error('Error, invalid data sent');
        }
        this.firstLeg = firstLeg;
        this.secondLeg = secondLeg;
    }
    square() {
        return (this.firstLeg * this.secondLeg) / 2;
    }
    perimeter() {
        return Math.sqrt(this.firstLeg ** 2 + this.secondLeg ** 2) + this.firstLeg + this.secondLeg;
    }
}

class Circle {
    constructor(radius) {
        if (typeof radius !== 'number' && radius < 0) {
            throw new Error('Error, invalid data sent');
        }
        this.radius = radius;
    }
    square() {
        return Math.PI * this.radius ** 2
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// 8. Вычислить факториал числа.
function getFactorial(num) {
    if (typeof num !== 'number') {
        throw new Error('Error, argument is not a number');
    }
    let result = num;
    for (let i = num - 1; i > 0; i--) {
        result *= i;
    }
    return result;
}

// 8. Вычислить факториал числа. Реализовать с помощью рекурсии.
function findFactorialNum(num) {
    if (typeof num !== 'number') {
        throw new Error('Error, argument is not a number');
    }
    if (num != 1) {
        return num * findFactorialNum(num - 1);
    }
    return num;
}

// 8....... Реализовать мемоизированную функцию вычисления факториала.
let findFactorialMemo = (function () {
    let memo = {};
    function memoryCreation(item) {
        if (item in memo) {
            return memo[item];
        }
        if (item === 1) {
            return item;
        }
        let value = item * memoryCreation(item - 1);
        memo[item] = value;
        return value;
    }
    return memoryCreation;
})();

// 9. Посчитать сумму всех элементов массива, только тех которые (Кратные двум, кратные трем, которые только положительные и нечетные)
let myFilterSum = (collection, callback) => {
    let sum = 0;
    for (let item of collection) {
        if (callback(item)) {
            sum += item;
        }
    }
    return sum;
}

// 9. Посчитать сумму всех элементов массива, только тех которые (Кратные двум, кратные трем, которые только положительные и нечетные),
// реализовать с помощью рекурсии для одномерного массива.
function sumElArrMultiplaceTwo(arr, callback, index) {
    index = index || 0;
    if (index === arr.length) {
        if (callback(arr[index])) {
            return arr[arr.length];
        }
        return 0;
    } else {
        if (callback(arr[index])) {
            return arr[index] + sumElArrMultiplaceTwo(arr, callback, ++index);
        }
    }
    return sumElArrMultiplaceTwo(arr, callback, ++index);
}

// 10. Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа)
let myFilterCounter = (collection, callback) => {
    let counter = 0;
    for (let item in collection) {
        if (callback(item)) {
            counter++;
        }
    }
    return counter;
}

// 11. Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону.
function convertDecimalToBinary(num) {
    if (typeof num !== 'number') {
        throw new Error('Error, argument is not a number');
    }
    let binary = '';
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}

function convertBinaryToDecimal(num) {
    if (typeof num !== 'number') {
        throw new Error('Error, argument is not a number');
    }
    let temp = num;
    let sum = 0;
    let i = 0;
    while (temp > 0) {
        let remaind = temp % 10;
        temp = Math.floor(temp / 10);
        sum += remaind * Math.pow(2, i++);
    }
    return sum;
}

// 12. Пункты 9 и 10 выполнить для двумерных массивов.
let myFilterSumDouble = (collection, callback) => {
    let sum = 0;
    for (let i = 0; i < collection.length; i++) {
        for (let j = 0; j < collection[i].length; j++) {
            if (callback(collection[i][j])) {
                sum += collection[i][j];
            }
        }
    }
    return sum;
}

let myFilterCountDouble = (collection, callback) => {
    let count = 0;
    for (let i = 0; i < collection.length; i++) {
        for (let j = 0; j < collection[i].length; j++) {
            if (callback(collection[i][j])) {
                count++;
            }
        }
    }
    return count;
}

function countNumberSimpleElementsDoubleArray(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > 1) {
                let flag = true;
                for (let k = 2; k < arr[i][j]; k++) {
                    if (arr[i][j] % k === 0) {
                        flag = false;
                        break;
                    }
                }
                if (flag === true) {
                    count++;
                }
            }
        }
    }
    return count;
}

// 13. Посчитать сумму значений чисел от min до max (всех, только тех которые кратны 3, только положительные)
function sumValuesBetveenMinMax(min, max, callback) {
    if (typeof (min && max) !== 'number') {
        throw new Error('Error, argument is not a number');
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
        if (callback(i)) {
            sum += i;
        }
    }
    return sum;
}

// Реализовать также с помощью рекурсии.
function sumValuesBetveenMinMaxRec(min, max, callback) {
    if (min <= max) {
        if (callback(max)) {
            return max + sumValuesBetveenMinMaxRec(min, max - 1, callback);
        }
        return sumValuesBetveenMinMaxRec(min, max - 1, callback);
    }
    return 0;
}

let sumValuesBetveenMinMaxMemo = (function () {
    let memo = {};
    function memoryCreation(min, max) {
        if (max in memo) {
            return memo[max];
        }
        if (min <= max) {
            if (max % 3 == 0 && max > 0) {
                value = max + memoryCreation(min, max - 1);
                memo[max] = value;
                return value;
            }
            value = memoryCreation(min, max - 1);
            memo[max] = value;
            return value;
        }
        return 0;
    }
    return memoryCreation;
})();

// 14. Найти среднее значение всех элементов одномерного/двумерного массива
// (Среднее только тех которые четные и которые не четные).
function findMeanArrey(arr, callback) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (callback(i)) {
            sum += arr[i];
            count++;
        }
    }
    return sum / count;
}

function findMeanDoubleArrey(arr, callback) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (callback(arr[i][j])) {
                sum += arr[i][j];
                count++;
            }
        }
    }
    return sum / count;
}

// 15. Транспонировать матрицу, сложить две матрицы.
function transMatrix(arr) {
    if (arr.length === 0) {
        throw new Error('Error, array of zero length');
    }
    let newArray = [];
    for (let i = 0; i < arr[0].length; i++) {
        newArray[i] = [];
        for (let j = 0; j < arr.length; j++) {
            newArray[i][j] = arr[j][i];
        }
    }
    return newArray;
}

function additionMatrix(arrOne, arrTwo) {
    if (arrOne.length === 0 || arrTwo.length === 0) {
        throw new Error('Error, arrays of different lengths');
    }
    let newArrey = [];
    for (let i = 0; i < arrOne.length; i++) {
        newArrey[i] = [];
        for (let j = 0; j < arrTwo.length; j++) {
            newArrey[i][j] = arrOne[i][j] + arrTwo[i][j];
        }
    }
    return newArrey;
}

// 16. Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент. Для столбца аналогично реализовать.
function deleteRowNullElem(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(0) !== -1) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

function deleteColumNullElem(arr) {
    let newArr = transMatrix(arr);
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].indexOf(0) !== -1) {
            newArr.splice(i, 1);
            i--;
        }
    }
    return transMatrix(newArr);
}

// 17. Посчитать сумму/количество нулевых элементов/среднее значение элементов матрицы над и под главной диагональю и на главной диагональю.
function sumOverMainDiagonal(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}

function sumMainDiagonal(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][i];
    }
    return sum;
}

function sumUnderMainDiagonal(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}

// 18. Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа фибоначчи
// (Реализовать с помощью итератора и генератора). Реализовать мемоизированную функцию. Реализовать с помощью рекурсии
function* fibonachi() {
    let previous = 0;
    let current = 1;
    while (true) {
        let next = previous + current;
        previous = current;
        current = next;
        yield current;
    }
}

function numFibonachiRecurs(num) {
    if (typeof num !== 'number') {
        throw new Error('Error, argument is not a number');
    }
    if (num <= 1) {
        return num;
    }
    return numFibonachiRecurs(num - 1) + numFibonachiRecurs(num - 2);
}

let numFibonachiMemo = (function () {
    let memo = {};
    function memoryCreation(i) {
        let value;
        if (i in memo) {
            return memo[i];
        }
        if (i <= 1) {
            value = i;
        } else {
            value = memoryCreation(i - 1) + memoryCreation(i - 2);
            memo[i] = value;
        }
        return value;
    }
    return memoryCreation;
})();

// 19.Реализовать с помощью итератора и генератора светофор. 
// При каждой следующей итерации мы должны получать следующий корректный цвет по логике светофора.`
function* changeTrafficLight() {
    while (true) {
        yield 'Red';
        yield 'Yellow';
        yield 'Green';
        yield 'Yellow';
    }
}

// 20. Определить является ли число отрицательным или положительным без сравнения на больше/меньше нуля. 
// Посчитать количество битов числа которые установлены в единицу и которые установлены в 0. Написать свою реализацию для ~, двумя способами.
function determingSignNumber(num) {
    if (typeof num !== 'number') {
        throw new Error('Error, argument is not a number');
    }
    return (num >> 31 === 0);
}

function numberBitsEqual(num) {
    if (typeof num !== 'number') {
        throw new Error('Error, argument is not a number');
    }
    let countOne = 0;
    for (let i = 0; i < 30; i++) {
        if (((num >> i) & 1) === 1) {
            countOne++;
        }
    }
    let countNul = 32 - countOne;
    return { countOne, countNul };
}

function tilde(num) {
    if (typeof num !== 'number') {
        throw new Error('Error, argument is not a number');
    }
    let modifiedNumber = 0;
    for (let i = 0; i < 32; i++) {
        modifiedNumber ^= (1 << i);
    }
    return modifiedNumber;
}
