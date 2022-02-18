// Bind
Function.prototype.myBind = function (context, ...rest) {
    let callback = this;
    return function (...args) {
        let id = Symbol();
        context[id] = callback;
        let result = context[id](...rest, ...args);
        delete context[id];
        return result;
    }
}

// Call
Function.prototype.myCall = function (context, ...args) {
    let callback = this;
    let id = Symbol();
    context[id] = callback;
    let result = context[id](...args);
    delete context[id];
    return result
}

// forEach
Array.prototype.myForEach = function (callback) {
    if (!Array.isArray(this)) {
        throw new Error('Error, argument is not arrey');
    }
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

// Filter
Array.prototype.myFilter = function (callback) {
    if (!Array.isArray(this)) {
        throw new Error('Error, argument is not arrey');
    }
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

//Map
Array.prototype.myMap = function (callback) {
    if (!Array.isArray(this)) {
        throw new Error('Error, argument is not arrey');
    }
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result[i] = callback(this[i], i, this);
    }
    return result;
}

//Find
Array.prototype.myFind = function (callback) {
    if (!Array.isArray(this)) {
        throw new Error('Error, argument is not arrey');
    }
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
}

// Reduce
Array.prototype.myReduce = function (callback, result) {
    if (!Array.isArray(this)) {
        throw new Error('Error, argument is not arrey');
    }
    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}