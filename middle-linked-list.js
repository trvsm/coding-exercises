/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
  let middle = head;
  let end = head;
  while (end !== null && end.next !== null) {
    //while we are not at end, and there is a node beyond end
    //each time end moves 2 nodes, head moves 1
    middle = middle.next; //middle moves up one
    end = end.next.next; //end moves up two
  }
  return middle;
  //this does not work standalone, but does work when listnode is typed
};

console.log(middleNode([1, 2, 3, 4, 5]));
