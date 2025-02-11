function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  if (typeof a === 'string' && typeof b === 'string') {
    return parseFloat(a) + parseFloat(b);
  } else if (typeof a === 'string') {
    return parseFloat(a) + b;
  } else if (typeof b === 'string') {
    return a + parseFloat(b);
  } else {
    return a + b;
  }
}

let result1 = add(1, 2); // Correct
let result2 = addSafe(1, "2"); // Correctly handles string and numbers
let result3 = addSafe("1", "2"); // Correctly handles two strings
console.log(result1, result2, result3); // Output: 3 3 3