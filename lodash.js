// https://lodash.com/
const _ = require("lodash");

// version
console.log("Lodash version:", _.VERSION);

// array intesection and difference
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [9, 8, 7, 6, 5, 4];

const arrInter1 = _.intersection(arr1, arr2);
const arrInter2 = _.intersection(arr2, arr1);
const arrDiff1 = _.difference(arr1, arr2);
const arrDiff2 = _.difference(arr2, arr1);

console.log("Array intersection (arr1,arr2):", arrInter1);
console.log("Array intersection (arr2,arr1):", arrInter2);
console.log("Array difference (arr1 - arr2):", arrDiff1);
console.log("Array difference (arr2 - arr1):", arrDiff2);

// Objects intersection and difference
const obj1 = [
  { name: "val 1", value: 1 },
  { name: "val 2", value: 2 },
  { name: "val 3", value: 3 },
  { name: "val 4", value: 4 }
];
const obj2 = [
  { name: "val 5", value: 5 },
  { name: "val 4", value: 4 },
  { name: "val 3", value: 3 },
  { name: "val 2", value: 2 }
];

// objects comparator
const objComp = (o1, o2) => o1.value === o2.value;
const objInter1 = _.intersectionWith(obj1, obj2, objComp);
const objInter2 = _.intersectionWith(obj2, obj1, objComp);
const objDiff1 = _.differenceWith(obj1, obj2, objComp);
const objDiff2 = _.differenceWith(obj2, obj1, objComp);

console.log("Object intersection (obj1,obj2):", objInter1);
console.log("Object intersection (obj2,obj1):", objInter2);
console.log("Object difference (obj1 - obj2):", objDiff1);
console.log("Object difference (obj2 - obj1):", objDiff2);
