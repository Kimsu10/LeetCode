/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) {
    return 0;
  }
  
  let arr = new Array(nums1.length + 1);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(nums2.length + 1).fill(0);
  }
  
  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1] + 1;
      } else {
        arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
      }
    }
  }
  
  return arr[arr.length - 1][arr[0].length - 1];
};