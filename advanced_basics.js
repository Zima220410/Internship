Function.prototype.myBind = function (context, ...rest) {
    let callback = this;
    return function (...args) {
        let id = Math.random().toString();
        context[id] = callback;
        let result = context[id](...rest, ...args);
        delete context[id];
        return result;
    }
}

Function.prototype.myCall = function (context, ...args) {
    let callback = this;
    let id = Math.random().toString();
    context[id] = callback;
    let result = context[id](...args);
    delete context[id];
    return result
}

// forEach
Array.prototype.myForEach = function (callback) {
    let arr = this;
    if (!Array.isArray(arr)) {
        throw new Error('Error, argument is not arrey');
    }
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

// Filter
Array.prototype.myFilter = function (callback) {
    let result = [];
    let arr = this;
    if (!Array.isArray(arr)) {
        throw new Error('Error, argument is not arrey');
    }
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

//Map
Array.prototype.myMap = function (callback) {
    let result = [];
    let arr = this;
    if (!Array.isArray(arr)) {
        throw new Error('Error, argument is not arrey');
    }
    for (let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i], i, arr);
    }
    return result;
}

//Find
Array.prototype.myFind = function (callback) {
    let arr = this;
    if (!Array.isArray(arr)) {
        throw new Error('Error, argument is not arrey');
    }
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
}

// Reduce
Array.prototype.myReduce = function (fn, result) {
    let arr = this;
    if (!Array.isArray(arr)) {
        throw new Error('Error, argument is not arrey');
    }
    for (let i = 0; i < arr.length; i++) {
        result = fn(result, arr[i], i, arr);
    }
    return result;
}