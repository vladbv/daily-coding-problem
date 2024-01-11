'''
Problem 214

Given an n x n 2D matrix, rotate the matrix by 90 degrees (clockwise). You have to rotate the matrix in place, which means you have to modify the input 2D matrix directly without using another 2D matrix.

'''

def rotate_matrix(matrix):
    n = len(matrix)
    
    # Transpose the matrix
    for i in range(n):
        for j in range(i, n):
            matrix[j][i], matrix[i][j] = matrix[i][j], matrix[j][i]
    
    # Reverse each row
    for i in range(n):
        matrix[i].reverse()

# Example usage
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
rotate_matrix(matrix)
print(matrix)  # Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

