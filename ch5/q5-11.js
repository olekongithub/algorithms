'use strict';

//Find overlapping rectangles

let rectangles = [
  {"x" : [3,4], "y": [4,9]},
  {"x" : [1,5], "y": [2,3]},
  {"x" : [8,9], "y": [1,10]},
  {"x" : [3,8], "y": [4,5]},
  {"x" : [3,16], "y": [1,6]},
  {"x" : [8,9], "y": [11,12]},
  {"x" : [2,9], "y": [10,12]},
]

function checkRectOverlap (rectangles) {
  let overlap = []
  for (let r1 in rectangles) {
    // console.log(rectangles[r]);
    //check if any other x is in x
    let xmin = rectangles[r1].x[0];
    let xmax = rectangles[r1].x[1];
    let ymin = rectangles[r1].y[0];
    let ymax = rectangles[r1].y[1];
    for (let r2 in rectangles) {
      let xoverlap = [];
      let yoverlap = [];
      if (r1 <= r2) continue;
      let x2min = rectangles[r2].x[0];
      let x2max = rectangles[r2].x[1];
      let y2min = rectangles[r2].y[0];
      let y2max = rectangles[r2].y[1];
      if (xmin <= x2min && xmax > x2min) {
        if (xmax < x2max) xoverlap = [x2min, xmax];
        else xoverlap = [x2min, x2max];
      }
      else continue;
      if (ymin <= y2min && ymax > y2min) {
        if (ymax < y2max) yoverlap = [y2min, ymax];
        else yoverlap = [y2min, y2max];
      }
      else continue;
      console.log(rectangles[r1], rectangles[r2])
      overlap.push({"x": xoverlap, "y": yoverlap});
    }
  }
  console.log(overlap);
}

checkRectOverlap(rectangles);