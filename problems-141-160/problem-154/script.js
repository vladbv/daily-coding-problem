/* Problem 154

This problem was asked by Google.

Given two rectangles on a 2D graph, return the area of their intersection. If the rectangles don't intersect, return 0.

For example, given the following rectangles:

{
    "top_left": [1, 4],
    "dimensions": [3, 3] # width, height
}
and

{
    "top_left": [0, 5],
    "dimensions": [4, 3] # width, height
}
return 6.

*/

/* Determining area overlap of two rectangles
/* @param {Object} rec1
* @param {Object} rec2
* @return {number}
*/

function calcRectangleOverlap(rec1, rec2) {
	// finding the top left corner for rec1
  const [x1, y1] = rec1.top_left;	
  const [height1, width1] = rec1.dimensions;
  const x2 = x1  + height1;
  const y2 = y1 + width1;
  
  // finding the top left corner for rec2		
  const [x3, y3] = rec2.top_left;
  const [height, width2] = rec2.dimensions;
  const x4 = x3 + height1;
  const y4 = y3 + width1;
  
  if(!isOverlap([x1, y1, x2, y2], [x3, y3, x4, y4])) return 0;
  
  // Area of 1st Rectangle
  
  const area1 = Math.abs(x1 - x2) * Math.abs(y1 - y2);
  
  // Area of 2nd Rectangle
  
 const area2 = Math.abs(x3 - x4) * Math.abs(y3 - y4);
 
 const areaI = Math.min(x2, x4) - Math.max(x1, x3) * (Math.min(y2, y4) - Math.max(y1, y3));
 
 return area1 + area2 - areaI;
  
}

/* Determining if rectangles overlap
* @param {number[]} rec1
* @param {number[]} rect2
* @return {boolean}
*/

function isOverlap(rec1, rec2) {
	return (
  	Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0]) &&  // if the width > 0
    Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1]) // if the height > 0
  );
}

const obj1 = {
	top_left: [1, 4],
  dimensions: [3, 3]
};

const obj2 = {
	top_left: [0, 5],
  dimensions: [4, 3]
};

console.log(calcRectangleOverlap(obj1, obj2));

