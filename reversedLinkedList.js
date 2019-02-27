/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
    if (!head) {
        return null
    }
    let nodes = [head];
    let node = head.next;

    while (node !== null) {
        nodes.push(node);
        node = node.next;
    }

    let first = nodes[nodes.length - 1]
    let ele = nodes.pop();
    while (nodes.length !== 0) {
        let nextEl = nodes.pop();
        ele.next = nextEl;
        ele = nextEl;
    }

    ele.next = null;
    return first;
};