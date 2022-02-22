class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (this.data < newNode.data) {
            if (this.right === null) {
                return this.right = newNode;
            } else {
                return this.right.insert(data);

            }
        } else {
            if (this.left === null) {
                return this.left = newNode;
            } else {
                return this.left.insert(data);
            }
        }
    }

    search(data) {
        if (this.data === null) {
            return null;
        } else if (this.data === data) {
            return this.data;
        } else if (this.data < data) {
            if (this.right !== null) {
                return this.right.search(data);
            }
        } else {
            if (this.left !== null) {
                return this.left.search(data);
            }

        }
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
        } else {
            this.left = this.left?.delete(data);
            return this;
        }
    }
}

function bubbleSort(array, callback) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (callback(array[j], array[j + 1])){
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

function selectionSort(arrey, callback){
    for (let i = 0; i < arrey.length - 1; i++){
        let min = i;
        for (let j = i + 1; j < arrey.length; j++){
            if (callback(arrey[j], arrey[min])){
                min = j;
            }
        }
        let temp = arrey[min];
        arrey[min] = arrey[i];
        arrey[i] = temp;
    }
    return arrey;
}