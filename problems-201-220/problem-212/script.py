'''
Problem 212

Problem Statement:

Given an array of 2D points where each point is represented as a pair of integers [x, y], find the maximum number of points that lie on the same straight line.
Example:

Input: points = [[1,1],[2,2],[3,3]]
Output: 3
Explanation: All points lie on the same line.

'''

from collections import defaultdict
from math import gcd

def max_points_on_line(points):
    def slope(p1, p2):
        dy = p2[1] - p1[1]
        dx = p2[0] - p1[0]
        if dx == 0:  # vertical line
            return 'inf'
        g = gcd(dy, dx)
        return (dy // g, dx // g)

    if len(points) <= 2:
        return len(points)

    max_points = 0
    for i in range(len(points)):
        slopes = defaultdict(int)
        same = 1
        for j in range(i + 1, len(points)):
            if points[i] == points[j]:
                same += 1
                continue
            slopes[slope(points[i], points[j])] += 1
        max_points = max(max_points, max(slopes.values(), default=0) + same)

    return max_points

# Example usage
points = [[1,1],[2,2],[3,3]]
print(max_points_on_line(points))  # Output: 3

