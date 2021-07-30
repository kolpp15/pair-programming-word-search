const transpose = function(matrix) {
  let result = [];
  
  for (let i = 0; i < matrix[0].length; i++) {
    const tempMatrix = [];
    for (let j = 0; j < matrix.length; j++) {
      tempMatrix.push(matrix[j][i]);
    }
    result.push(tempMatrix);
  }
  return result;
};

const wordSearch = (letters, word) => {

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (const m of verticalJoin) {
    if (m.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;