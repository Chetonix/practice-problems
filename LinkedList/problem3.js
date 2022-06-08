// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  var curr;
  let p = (curr = new ListNode(0));
  var sum = 0;
  while (l1 || l2) {

    if (l1 && l2) {
      sum = l1.val + l2.val + carry;
      l1=l1.next;
      l2=l2.next;
    } else if (l1) {
      sum = l1.val + carry;
      l1=l1.next;
    } else if (l2) {
      sum = l2.val + carry;
      l2=l2.next;
    }

    carry = Math.floor(sum / 10);
    sum = Math.floor(sum) % 10;
    curr.next = new ListNode(sum);
    curr = curr.next;

  }

  if(carry===1)
    curr.next=new ListNode(carry);
  return p.next;
};