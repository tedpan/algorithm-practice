/*
给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
https://leetcode.cn/problems/set-matrix-zeroes/
*/

/*
解法1：暴力解，两层循环找出需要转换的行和列，然后转换。
时间复杂度：O(nm)
空间复杂度：O(n+m)
*/

export function setZeroes(matrix: number[][]) {
  const rowSize = matrix.length;
  const colSize = matrix[0].length;
  const zeroRowIdxs: { [key: number]: boolean } = {};
  const zeroColIdxs: { [key: number]: boolean } = {};
  for (let rowIdx = 0; rowIdx < rowSize; rowIdx++) {
    for (let colIdx = 0; colIdx < colSize; colIdx++) {
      if (matrix[rowIdx][colIdx] === 0) {
        zeroRowIdxs[rowIdx] = true;
        zeroColIdxs[colIdx] = true;
      }
    }
  }
  matrix.forEach((row, rowIdx) => {
    row.forEach((_, colIdx) => {
      if (zeroRowIdxs[rowIdx] || zeroColIdxs[colIdx]) {
        row[colIdx] = 0;
      }
    });
  });
}

/*
解法2：解法1的基础上，通过把转换行列信息存到第一行和第一列而改善空间。
时间复杂度：O(nm)
空间复杂度：O(1)
*/

export function setZeroes2(matrix: number[][]) {
  const rowSize = matrix.length;
  const colSize = matrix[0].length;
  // 在修改第一行和第一列时，使用两个标志判断第一行和第一列是否存在0
  const row0hasZero = matrix[0].some((item) => item === 0);
  const col0hasZero = matrix.some((row) => row[0] === 0);

  // 从第一行和第一列开始迭代
  for (let rowIdx = 1; rowIdx < rowSize; rowIdx++) {
    for (let colIdx = 1; colIdx < colSize; colIdx++) {
      if (matrix[rowIdx][colIdx] === 0) {
        matrix[rowIdx][0] = 0;
        matrix[0][colIdx] = 0;
      }
    }
  }

  for (let rowIdx = 1; rowIdx < rowSize; rowIdx++) {
    for (let colIdx = 1; colIdx < colSize; colIdx++) {
      if (matrix[0][colIdx] === 0 || matrix[rowIdx][0] === 0) {
        matrix[rowIdx][colIdx] = 0;
      }
    }
  }
  // 修改第一行和第一列
  if (row0hasZero) {
    matrix[0].forEach((_, idx) => {
      matrix[0][idx] = 0;
    });
  }
  if (col0hasZero) {
    matrix.forEach((row) => {
      row[0] = 0;
    });
  }
}
