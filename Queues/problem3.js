class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

}





var MyQueue = function() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();

};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.stack1.peek()){
    this.stack2.push(this.stack1.pop());
}
    let record = this.stack2.pop();
    
    while(this.stack2.peek()) {
        this.stack1.push(this.stack2.pop());
    }
    return record;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
       while(this.stack1.peek()){
    this.stack2.push(this.stack1.pop());
}
    let record = this.stack2.peek();
    
    while(this.stack2.peek()) {
        this.stack1.push(this.stack2.pop());
    }

    return record;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.stack1.data.length > 0){
        return false
    }
    else return true;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */