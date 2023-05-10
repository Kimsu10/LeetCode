/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) { 
const matrix = new Array(n).fill().map(() => new Array(n).fill(0));
  let num = 1;
  let up = 0;
  let down = n - 1;
  let left = 0;
  let right = n - 1;

  const half = Math.ceil(n / 2);
  while (num <= n * n) {
    for (let i = 0; i < half; i++) {
      for (let j = left; j <= right; j++) {
        matrix[up][j] = num++;
      }
      up++;

      for (let j = up; j <= down; j++) {
        matrix[j][right] = num++;
      }
      right--;

      for (let j = right; j >= left; j--) {
        matrix[down][j] = num++;
      }
      down--;

      for (let j = down; j >= up; j--) {
        matrix[j][left] = num++;
      }
      left++;
    }
  }

  return matrix;
};