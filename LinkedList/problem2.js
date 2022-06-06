// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// var getIntersectionNode = function(headA, headB) {
//     let listA = headA;
//     let listB = headB;
//     let arrA = [];
//     // let arrB = [];
    
//     while(listA) {
//         arrA.push(listA);
//         listA = listA.next;
        
//     }
    
//     while(listB) {
//         if (arrA.includes(listB)) {
//             return listB;
//         }
//         listB = listB.next;
//     }
//     return null;
// };

//An alternate solution
var getIntersectionNode = function(headA, headB) {

    let nodeRefA = headA;
    let nodeRefB = headB;

    while(nodeRefA !== nodeRefB) {
        nodeRefA = nodeRefA === null ? headB : nodeRefA.next;
        nodeRefB = nodeRefB === null ? headA : nodeRefB.next;
    }

    return nodeRefA;
    
    

}