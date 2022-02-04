// 1. Написать функцию которая проверяет являются две строки анаграммой или нет
function stringsAreAnagram(strOne, strTwo) {
    if (strOne.toLowerCase().split('').sort().join('') ===
        strTwo.toLowerCase().split('').sort().join('')) {
        return true;
    } else {
        return false;
    }
}
stringsAreAnagram("банка", "кабан");


// 3. Написать функцию которая вычисляет подсчет количество цифр в числе. 
function findLengthNumber(num) {
    let count = 1;
    while ((num /= 10) >= 1) {
        count++;
    }
    return count;
}
findLengthNumber(1234567);

// 3. Написать функцию которая вычисляет подсчет количество цифр в числе. Рекурсия.
let findLengthNumberRecurs = (function () {
    let count = 1;
    function getNum(num) {
        if ((num /= 10) >= 1) {
            count++;
            getNum(num);
        }
        return count;
    }
    return getNum;
})();
findLengthNumberRecurs(123456789);


// 4. Реализовать функцию которая проверяет, является ли строка палиндромом.
function isStringPalindrom(str) {
    let result = '';
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === str[str.length - 1 - i]) {
            result = 'Yes';
        } else {
            result = 'no';
            return result;
        }
    }
    return result;
}
isStringPalindrom('zxcvcxz');


// 5. Написать функцию которая вычисляет подсчет уникальных слов в предложении
function numUniqueWords(str) {
    let arr = str.split(' ');
    return (Array.from(new Set(arr)).length);
}
numUniqueWords('qqq aaa qqq zzz aaa qqq');

// 5. Написать функцию которая вычисляет подсчет уникальных слов в предложении
function numberUniqueWords(srt) {
    let arr = srt.split(' ');
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
            }
        }
    }
    return arr.length;
}
numberUniqueWords('zzz aaa zzzz qqq aaa qqq zzz');


// 6. Написать функцию которая вычисляет вхождение каждого слова в предложение
function calcNumberOccurrencesWords(str) {
    let arr = str.split(' ');
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1;
        }
    }
    return obj;
}
calcNumberOccurrencesWords("qqq aaa qqq zzz aaa qqq qqq");


// 7. Вычислить периметр и площадь для прямоугольника, треугольника и круга. С помощью конструктора и классов.
class Rectangle {
    constructor(width, heigth) {
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
let rectangle = new Rectangle(25, 4);
rectangle.square();
rectangle.perimeter();

class RightTriangle {
    constructor(firstLeg, secondLeg) {
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
let rightTriangle = new RightTriangle(2, 4);
rightTriangle.square();
rightTriangle.perimeter();

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    square() {
        return Math.PI * this.radius ** 2
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}
let circle = new Circle(5);
circle.square();
circle.perimeter();

// 8. Вычислить факториал числа.
function getFactorial(num) {
    let result = num;
    for (let i = num - 1; i > 0; i--) {
        result *= i;
    }
    return result;
}
getFactorial(4);

// 8. Вычислить факториал числа. Реализовать с помощью рекурсии.
function findFactorialOfNum(num) {
    if (num != 1) {
        return num * findFactorialOfNum(num - 1);
    }
    return num;
}
findFactorialOfNum(5);

// 8. Реализовать мемоизированную функцию вычисления факториала.
let findFactorialMemo = (function () {
    let memo = {};
    function memoryCreation(i) {
        let value;
        if (i in memo) {
            value = memo[i];
        } else {
            if (i === 1) {
                value = i;
            } else {
                value = i * memoryCreation(i - 1);
                memo[i] = value;
            }
        }
        return value;
    }
    return memoryCreation;
})();
findFactorialMemo(5);


// 9. Посчитать сумму всех элементов массива, только тех которые (Кратные двум, кратные трем, которые только положительные и нечетные)
let mus = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrey = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let myFilterSum = (collection, callback) => {
    let sum = 0;
    for (let item of collection) {
        if (callback(item)) {
            sum += item;
        }
    }
    return sum;
}
let sumElementsArreyMultipleTwo = myFilterSum(arrey, (num) => num % 2 === 0);
sumElementsArreyMultipleTwo;

let sumElementsArreyMultipleThree = myFilterSum(arrey, (num) => num % 3 === 0);
sumElementsArreyMultipleThree;

let sumPositiveNotMultiElemeArrey = myFilterSum(arrey, (num) => num > 0 && num % 2 !== 0);
sumPositiveNotMultiElemeArrey;


// 9. Посчитать сумму всех элементов массива, только тех которые (Кратные двум, кратные трем, которые только положительные и нечетные),
// реализовать с помощью рекурсии для одномерного массива.

function sumElArrMultiplaceTwo(arr) {
    return sum(arr, arr.length - 1);
    function sum(arr, index) {
        if (index === 0) {
            if (arr[index] % 2 === 0) {
                return arr[0];
            }
            return 0;
        } else {
            if (arr[index] % 2 === 0) {
                return arr[index] + sum(arr, index - 1);
            }
        }
        return sum(arr, index - 1);
    }
}
sumElArrMultiplaceTwo(arrey);

function sumElArrNotMultiplaceTwo(arr) {
    return sum(arr, arr.length - 1);
    function sum(arr, index) {
        if (index === 0) {
            if (arr[index] % 2 !== 0) {
                return arr[0];
            }
            return 0;
        } else {
            if (arr[index] % 2 !== 0) {
                return arr[index] + sum(arr, index - 1);
            }
        }
        return sum(arr, index - 1);
    }
}
sumElArrNotMultiplaceTwo(arrey);

function sumPositiveElemArr(arr) {
    return sum(arr, arr.length - 1);
    function sum(arr, index) {
        if (index === 0) {
            if (arr[index] > 0) {
                return arr[0];
            }
            return 0;
        } else {
            if (arr[index] > 0) {
                return arr[index] + sum(arr, index - 1);
            }
        }
        return sum(arr, index - 1);
    }
}
sumPositiveElemArr(arrey);


// 10. Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа)

let myFilterCounter = (collection, callback) => {
    let counter = 0;
    for (let item of collection) {
        if (callback(item)) {
            counter++;
        }
    }
    return counter;
}
let countNumberNullElement = myFilterCounter(mus, (num) => num == 0);
countNumberNullElement;

let countNumberPositiveElement = myFilterCounter(mus, (num) => num > 0);
countNumberPositiveElement;

let countNumberNegativeElement = myFilterCounter(mus, (num) => num < 0);
countNumberNegativeElement;

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
}
mus.filter(isPrime).length;


// 11. Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону.
function convertDecimalToBinary(num) {
    let str = '';
    let newStr = '';
    let temp = num;
    while (temp > 0) {
        str = str + temp % 2;
        temp = Math.floor(temp / 2);
    }
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
convertDecimalToBinary(100);

function convertBinaryToDecimal(num) {
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
convertBinaryToDecimal(1100100);

// 12. Пункты 9 и 10 выполнить для двумерных массивов.
let arr = [
    [1, -2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let doublearrey = [
    [1, -2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
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
let sumElementsDoubleArreyMultiplaceTwo = myFilterSumDouble(doublearrey, (num) => num % 2 === 0);
sumElementsDoubleArreyMultiplaceTwo;

let sumElementsDoubleArreyNotMultiplaceThree = myFilterSumDouble(doublearrey, (num) => num % 3 === 0);
sumElementsDoubleArreyNotMultiplaceThree;

let sumPositiveElementsDoubleArrey = myFilterSumDouble(doublearrey, (num) => num > 0 && num % 2 !== 0);
sumPositiveElementsDoubleArrey;

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

let countNumberOfNullElementsDoubleArray = myFilterCountDouble(doublearrey, (num) => num === 0);
countNumberOfNullElementsDoubleArray;

let countNumberOfPositiveElementsDoubleArray = myFilterCountDouble(doublearrey, (num) => num > 0);
countNumberOfPositiveElementsDoubleArray;

let countNumberOfNegativeElementsDoubleArray = myFilterCountDouble(doublearrey, (num) => num < 0);
countNumberOfNegativeElementsDoubleArray;

function countNumberOfSimpleElementsDoubleArray(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > 1) {
                let flag = true;
                for (let k = 2; k < arr[i][j]; k++) {
                    if (arr[i][j] % k == 0) {
                        flag = false;
                        break;
                    }
                }
                if (flag == true) {
                    count++;
                }
            }
        }
    }
    return count;
}
countNumberOfSimpleElementsDoubleArray(arr);


// 13. Посчитать сумму значений чисел от min до max (всех, только тех которые кратны 3, только положительные)
function sumValuesBetveenMinMax(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        if (i % 3 == 0 && i > 0) {
            sum += i;
        }
    }
    return sum;
}
sumValuesBetveenMinMax(2, 12);

// Реализовать также с помощью рекурсии.
function sumValuesBetveenMinMaxRec(min, max) {
    if (min <= max) {
        if (max % 3 == 0 && max > 0) {
            return max + sumValuesBetveenMinMaxRec(min, max - 1);
        }
        return sumValuesBetveenMinMaxRec(min, max - 1);
    }
    return 0;
}
sumValuesBetveenMinMaxRec(2, 9);


let sumValuesBetveenMinMaxMemo = (function () {
    let memo = {};
    function memoryCreation(min, max) {
        if (max in memo) {
            value = memo[max];
        } else {
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
        return value;
    }
    return memoryCreation;
})();
sumValuesBetveenMinMaxMemo(-10, 10);

// 14. Найти среднее значение всех элементов одномерного/двумерного массива
// (Среднее только тех которые четные и которые не четные).
function findMeanArrey(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
            count++;
        }
    }
    return sum / count;
}
findMeanArrey(arrey);

function findMeanDoubleArrey(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 !== 0) {
                sum += arr[i][j];
                count++;
            }
        }
    }
    return sum / count;
}
findMeanDoubleArrey(arrey);


// 15. Транспонировать матрицу, сложить две матрицы.
function transMatrix(arr) {
    if (arr.length == 0) {
        return 0;
    }
    let newTransArr = [];
    for (let i = 0; i < arr[0].length; i++) {
        newTransArr[i] = [];
        for (let j = 0; j < arr.length; j++) {
            newTransArr[i][j] = arr[j][i];
        }
    }
    return newTransArr;
}
transMatrix(arrey);

let arrTwo = [
    [2, 3, 4],
    [3, 4, 5],
    [4, 5, 96],
];

function additionMatrix(arrOne, arrTwo) {
    if (arrOne.length == 0 || arrTwo.length == 0) {
        return 0;
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
additionMatrix(doublearrey, arrTwo);

// 16. Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент. Для столбца аналогично реализовать.
let arrThree = [
    [1, 1, 1],
    [2, 2, 0],
    [3, 3, 3],
];
function deleteRowNullElem(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(0) !== -1) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
// deleteRowNullElem(arrThree);

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
// deleteColumNullElem(arrThree);

// 17. Посчитать сумму/количество нулевых элементов/среднее значение элементов матрицы над и под главной диагональю и на главной диагональю.
let arrFour = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4]
];
function sumOverMainDiagonal(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}
sumOverMainDiagonal(arrFour);

function sumMainDiagonal(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][i];
    }
    return sum;
}
sumMainDiagonal(arrFour);

function sumUnderMainDiagonal(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}
sumUnderMainDiagonal(arrFour);


// 18. Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа фибоначчи
// (Реализовать с помощью итератора и генератора). Реализовать мемоизированную функцию. Реализовать с помощью рекурсии

function numberFibonachi() {
    let range = {
        from: 1,
        to: 10,
        [Symbol.iterator]() {
            this.current = this.from;
            return this;
        },
        next() {
            if (this.current <= this.to) {
                return {
                    done: false,
                    value: this.current++
                };
            } else {
                return {
                    done: true
                };
            }
        }
    };
    let num1 = 0;
    let num2 = 1;
    for (let item of range) {
        let num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        return num2;
    };
}
numberFibonachi();

function* fibonachi() {
    let num1 = 1;
    let num2 = 1;
    while (true) {
        let num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        yield num2;
    }
}
let fib = fibonachi();
fib.next().value;


function numFibonachiRecurs(num) {
    if (num <= 1) {
        return num;
    }
    return numFibonachiRecurs(num - 1) + numFibonachiRecurs(num - 2);
}
numFibonachiRecurs(7);


let numFibonachiMemo = (function () {
    let memo = {};
    function memoryCreation(i) {
        let value;
        if (i in memo) {
            value = memo[i];
        } else {
            if (i <= 1) {
                value = i;
            } else {
                value = memoryCreation(i - 1) + memoryCreation(i - 2);
                memo[i] = value;
            }
        }
        return value;
    }
    return memoryCreation;
})();
numFibonachiMemo(7);


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
let trafficLight = changeTrafficLight();

for (let i = 0; i < 100; i++) {
    trafficLight.next().value;
}

// 20. Определить является ли число отрицательным или положительным без сравнения на больше/меньше нуля. 
// Посчитать количество битов числа которые установлены в единицу и которые установлены в 0. Написать свою реализацию для ~, двумя способами.

let binaryNumber = '101011100101001';
function determingSignNumber(num) {
    if (num[0] === '0') {
        return true;
    } else {
        return false;
    }
}
determingSignNumber(binaryNumber);


let numberBitsEqualOne = myFilterCounter(binaryNumber, (num) => num === '1');
numberBitsEqualOne;

let numberBitsEqualNul = myFilterCounter(binaryNumber, (num) => num === '0');
numberBitsEqualNul;

function tilde(num) {
    let newNum = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] === '1') {
            newNum[i] = 0;
        } else {
            newNum[i] = 1;
        }
    }
    return newNum.join('');
}
tilde(binaryNumber);