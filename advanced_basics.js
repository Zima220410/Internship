// Bind
function myBind(fn, context, ...rest) {
    return function (...args) {
        let id = Math.random().toString();
        context[id] = fn;
        let result = context[id](...rest, ...args);
        delete context[id];
        return result;
    }
}

// Call
function myCall(fn, context, ...args) {
    let id = Math.random().toString();
    context[id] = fn;
    let result = context[id](...args);
    delete context[id];
    return result;
}

// forEach
Array.prototype.myForEach = function (callback) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

// Filter
Array.prototype.myFilter = function (callback) {
    let result = [];
    let arr = this;
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
    for (let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i], i, arr);
    }
    return result;
}

//Find
Array.prototype.myFind = function(callback) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)){
            return true;
        }
    }
}

// Reduce
Array.prototype.myReduce = function (fn, result) {
    let arr = this;
    for(let i = 0; i < arr.length; i++) {
        result = fn(result, arr[i], i, arr);
    }
    return result;
}