// I stored the horizontalSearch function, which was already implemented in the assignment, in a var so we can reuse it.

const wordSearch = (letters, word) => {   
    let result = horizontalSearch(letters, word);

// if the wordSearch function does not find any "true" results by searching horizontally, it will search in a "new Matrix"
//created using the transpose function (line 31).
    
    if (!result) {
        let newMatrix = transpose(letters);
        return horizontalSearch(newMatrix, word);
    }
   
    return result;
  };
// horizontalSearch function provided in the assignment
  
   const horizontalSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (line of horizontalJoin) {
      if (line.includes(word)) {
        return true;
      }  
    }
    return false;
  }

//transpose function,  this function is creating a new matrix, by transforming columns into rows
//that way we can check the columns by transforming it in rows and then using 
//a horizontalFunction again to check the "new rows" (old colums). 
//This was the only way I could check vertically by transforming the columns into rows. 
//I don't know if the best way to do this but I couldn't think of anything better

const transpose = function (matrix) {
    const newMatrix = [];
    const matLen = matrix[0].length;
    for (let i = 0; i < matLen; i++) {
      const rows = [];
      matrix.forEach(arr => {
        rows.push(arr[i]);
      });
      newMatrix.push(rows);
    }
    return newMatrix;
  };

  module.exports = wordSearch;