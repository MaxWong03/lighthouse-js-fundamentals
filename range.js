// The function should return an empty array [] if given incorrect parameters, such as:

// start, end, or step being undefined
// start being greater than end
// step being 0, or negative

function range(start, end, step) {
  let array = [];
  if (start === undefined || end === undefined || step === undefined) {
    return array;
  } else if (start > end) {
    return array;
  } else if (step < 0 || step === 0) {
    return array;
  } else {
    array.push(start);
    let run = 1;
    while (run) {
      if (array[array.length - 1] + step > end) {
        run = 0;
      } else {
        array.push(array[array.length - 1] + step);
      }

    }
    return array;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));