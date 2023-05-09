/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];
    let startR = 0;
    let endR = matrix.length -1;
    let startC = 0;
    let endC = matrix[0].length -1;
    
    while (startR <= endR && startC <= endC){
        
        for (let i=startC; i <= endC; i++){
            result.push(matrix[startR][i])
        }
        startR++;
        
        for (let j = startR; j <= endR; j++){
            result.push(matrix[j][endC])
        }
        endC--;
        
    if(startR <= endR && startC <= endC){
        
        for(let i = endC; i >= startC; i--){
            result.push(matrix[endR][i])
        }
        endR--;
    
        for(let j = endR; j >= startR; j--){
            result.push(matrix[j][startC])
        }
        startC++;
        }
    }
    return result
};