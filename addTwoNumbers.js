
// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and
// return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

//     Input: (2 - > 4 - > 3) + (5 - > 6 - > 4)
// Output: 7 - > 0 - > 8
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function (l1, l2) {
    let currentNode;
    let carry = 0;
    let value = l1.val + l2.val;
    if (value >= 10) carry = 1;
    currentNode = new ListNode();
    currentNode.val = value % 10;
    let firstNode = currentNode;
    l1 = l1.next;
    l2 = l2.next;
    while ((l1 !== null || l2 !== null) || carry) {
        value = carry;
        if (l1) {
            value += l1.val;
            l1 = l1.next;

        }
        if (l2) {
            value += l2.val;
            l2 = l2.next;
        }
        carry = 0;
        if (value >= 10) carry = 1;
        currentNode.next = new ListNode();
        currentNode.next.val = value % 10;
        currentNode = currentNode.next
    }
    return firstNode;
};