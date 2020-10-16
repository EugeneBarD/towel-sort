module.exports = function towelSort (matrix) {
  if (typeof(matrix) == 'undefined' || matrix.length == 0) return [];
  let bufmatrix = [[]];
  for (let i = 0; i < matrix.length; i++) {
    bufmatrix[i] = matrix[i].join(',')
  }
  let array = bufmatrix[0];
  for (let i = 1; i < bufmatrix.length; i++) {
    array = i % 2 == 0 ? `${array},${bufmatrix[i]}`: `${array},${bufmatrix[i].split(',').reverse().join(',')}`
  }
  return array.split(',').map(Number)
}
