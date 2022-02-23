class Node {
    constructor() {
        this.data = null;
        this.left = null;
        this.right = null;
    }

    insert(data, currentNode) {
        currentNode = currentNode || this;
        if (currentNode.data === null) {
            currentNode.data = data;
            return true;
        }
        if (data > currentNode.data) {
            if (currentNode.right === null) {
                currentNode.right = new Node();
            }
            return this.insert(data, currentNode.right);
        } else {
            if (currentNode.left === null) {
                currentNode.left = new Node();
            }
            return this.insert(data, currentNode.left);
        }
    }

    search(data) {
        if (this.data === null) {
            return null;
        }
        if (this.data === data) {
            return this.data;
        }
        if (this.data < data && this.right !== null) {
            return this.right.search(data);
        }
        return this.left.search(data);    
    }

    delete(data) {
        if (this.data === null) {
            return null;
        }
        if (this.data === data) {
            if (this.left === null && this.right === null) {
                return null;
            }
            if (this.left === null) {
                return this.right;
            }
            if (this.right === null) {
                return this.left;
            }
            let newNode = this.right;
            while (newNode.left) {
                newNode = newNode.left;
            }
            this.data = newNode.data;
            this.right = this.right.delete(newNode.data);
            return this;
        } else if (data > this.data) {
            this.right = this.right?.delete(data);
            return this;
        }
        this.left = this.left?.delete(data);
        return this;
    }
}

Array.prototype.bubbleSort = function (callback){
    if (!Array.isArray(this)) {
        throw new Error('Error, argument is not arrey');
    }
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
            if (callback(this[j], this[j + 1])){
                let temp = this[j + 1];
                this[j + 1] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}

Array.prototype.selectionSort = function(callback){
    if (!Array.isArray(this)) {
        throw new Error('Error, argument is not arrey');
    }
    for (let i = 0; i < this.length - 1; i++){
        let min = i;
        for (let j = i + 1; j < this.length; j++){
            if (callback(this[j], this[min])){
                min = j;
            }
        }
        let temp = this[min];
        this[min] = this[i];
        this[i] = temp;
    }
    return this;
}