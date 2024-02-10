//let arr = [2, 4, 5, 6, 9, 11, 13, 14, 20, 22, 26, 29, 32, 36];
let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
//    0,1,2,3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13
//    startingPoint = 0   and endingPoint =13
//      0+ 13 /2   6.5 to middle Element is 6 means 13
//      if 13 > 12
//    12 < 13
let startElement = 0;
let endElement = arr.length - 1;
let target = 2;
let isAsc = arr[startElement] <= arr[endElement];
console.log(isAsc);
while (startElement <= endElement) {
  let middleElement = Math.trunc(
    startElement + (endElement - startElement) / 2
  );

  if (startElement == middleElement) return console.log("index found", middleElement);

  if (isAsc) { //if ascending order 
    if (target < arr[middleElement])
      // 14< 13
      endElement = middleElement - 1;
    else if (arr[middleElement] < target)
      //  13< 14
      startElement = middleElement + 1;
  } else {  // descending order
    if (target > arr[middleElement])
      // 14< 13
      endElement = middleElement - 1;
    else if (arr[middleElement] > target)
      //  13< 14
      startElement = middleElement + 1;
  }
}
//return -1;
