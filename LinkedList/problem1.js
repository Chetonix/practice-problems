// Given head, the head of a linked list, determine if the linked list has a cycle in it.


var hasCycle = function(head) {

    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            return true;
        }
    }
    
    return false;
}