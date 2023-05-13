/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let move = 0
  let x = 0 
  let y = 0
  let sum = 0

  let  result1= new ListNode(0)
  let  result2 = result1 
  let list1 = l1
  let list2 = l2

  while(list1 !== null || list2 !== null){
    x = (list1 !== null) ? list1.val : 0
    y = (list2 !== null) ? list2.val :0

    sum = x + y + move
    move = Math.floor(sum/10)
    result1.next = new ListNode(sum % 10)
    result1 = result1.next

    if(list1 !== null) list1 = list1.next
    if(list2 !== null) list2 = list2.next
  }
  if(move > 0)
    result1.next = new ListNode(move)
    return result2.next
}