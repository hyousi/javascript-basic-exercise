export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const length = Math.abs(end - start);
  const grad = (end - start) > 0 ? 1 : -1;
  return Array(length).fill(start).map((val, idx) => val + idx * grad);
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (numbers == null || [...numbers].length === 0) { return 0; }
  return [...numbers].reduce((prev, curr) => prev + curr);
}
