/**
 * @param {number} k
 */

class Node() {
    constructor(val, next){
        this.val = val;
        this.next = next;
    }
}


var MyCircularQueue = function(k) {
    constructor(k) {
        this.k = k;
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.length === k) {
        return false;
    }
    
    const node = new Node(value, this.head);
    
    if (this.head===null && this.tail === null) {
        this.head = node;
        this.tail = node;
    } else if (this.head === this.tail) {
        this.head.next = node;
        this.tail = node;
    } else{
        this.tail.next = node;
        this.tail = node;        
    }
    
    this.length += 1;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()) {
        return -1;
    }
    return this.head.val;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()) {
        return -1;
    }
    return this.tail.val;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return (this.length === 0);
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return (this.length === k);
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */