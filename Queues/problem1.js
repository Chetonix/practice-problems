class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class MyCircularQueue {
    constructor(k) {
        this.k = k;
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    isEmpty() {
        return this.length === 0;
    }
    
    isFull() {
        return this.length === this.k;
    }
    
    Front() {
        if (this.isEmpty()) {
            return -1;
        }
        
        return this.head.val;
    }
    
    Rear() {
        if (this.isEmpty()) {
            return -1;
        }
        
        return this.tail.val;
    }
    
    enQueue(val) {
        if (this.length === this.k) {
            return false;
        }
        
        const node = new Node(val, this.head);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else if (this.head === this.tail) {
            this.tail = node;
            this.head.next = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        
        this.length += 1;
        return true;
    }
    
    deQueue() {
        if (this.isEmpty()) {
            return false;
        }
        
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null
        } else {
            this.head = this.head.next;
            this.tail.next = this.head;
        }
        
        this.length -= 1;
        return true;
    }
}