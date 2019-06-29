// concat([ 1, 2, 3 ], [ 4, 5, 6 ]);	[ 1, 2, 3, 4, 5, 6 ]
// concat([ 0, 3, 1 ], [ 9, 7, 2 ]);	[ 0, 3, 1, 9, 7, 2 ]
// concat([], [ 9, 7, 2 ]);	[ 9, 7, 2 ]
// concat([ 5, 10 ], []);	[ 5, 10 ]


function concat(arr1, arr2) {
  newArr = arr1;
  for (let i = 0; i < arr2.length; i++) {
    newArr.splice(arr1.length, 0, arr2[i])
  }
  return newArr;
}



//test
console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);

