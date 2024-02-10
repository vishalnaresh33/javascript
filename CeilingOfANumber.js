let arr = [2, 3, 5, 9, 14, 16, 18];
let startElement = 0;
let endElement = arr.length - 1;
let ifAsc = startElement <= startElement;
let target = 15;

function ceiling(){
    //if the target value is greater then the last number of the array it will directly return -1
    if(target>arr[arr.length-1]){
        return -1;
    }

    while(startElement<=endElement){

        let middleElement = Math.trunc(
            startElement + (endElement - startElement)/ 2
          );
          if(target<arr[middleElement]){

            endElement= middleElement-1; // just minus one in the middle array value so it will become the latest end value 
          }else if( target > arr[middleElement]){
            startElement=middleElement+1;
          }else{
            return middleElement;
          }
    }
    return arr[startElement];
}
console.log(ceiling())