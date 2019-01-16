var arr1 = [1,2,3,4,4,3,2,1];

var arr = Array.from(new Set(arr1))

let arr2 = [];
for(var i = 0; i < arr.length; i++) {
  for(var k = 0; k < arr1.length; k++) {
    if(arr[i] === arr1[k]) {
      // console.log(arr1.splice(k, 1)[0]);
      arr2.push(arr1.splice(k, 1)[0])
    }
  }
}
console.log(arr2);







return;

/*
  *找出数组中 一个项 出现的次数 并保存  推到数组中*
*/
var arr1 = [1,1,1,2,2,3,3,3,1];

var arr = Array.from(new Set(arr1))


let arr3 = [];

for(var i = 0; i < arr.length; i++) {
  var index = 0;
  for(var k = 0; k < arr1.length; k++) {
    if(arr[i] === arr1[k]) {
      index++
    }
    if(k === arr1.length-1) {
      arr3.push(index);
    }
  }
}
// console.log(arr3);

/*
  *找出数组中 一个项 出现的次数 并保存  推到数组中*
*/





