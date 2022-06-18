/**
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
    this.size = k;
    this.length = 0;
    this.front = null;
    this.back = null;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.size === this.length) {
        return false;
    }
    if(this.isEmpty) {
        this.front = {value};
        this.back = {value}
        this.length += 1;
    }else{
        this.front.next = {value, prev:this.front};
        this.front = this.front.next;
        this.length += 1;
    }
    return true;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.size === this.length) {
        return false;
    }
    if(this.isEmpty) {
        this.front = {value};
        this.back = {value};
        this.length += 1;
    }else{
        this.back.prev = {value, next: this.back};
        this.back = this.back.prev;
        this.length += 1;
    }
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.isEmpty) {
        return false;
    }else if (this.front === this.back) {
        this.front = null;
        this.back= null;
        return true;
    }else {
        this.front = this.front.prev;
        this.front.next = null;
        return true;
    }
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.isEmpty) {
        return false;
    }else if (this.front===this.back) {
        this.front = null;
        this.back = null;
    }else  {
        this.back = this.back.next;
        this.back.prev = null;
    }
    return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.isEmpty) {
        return -1;
    }
    return this.front.value;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.isEmpty) {
        return -1;
    }
    return this.back.value;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return (this.length === 0);
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return (this.length === k);
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */