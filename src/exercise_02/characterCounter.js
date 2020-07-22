export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  let ans = 0;
  if (string == null) {
    ans = 0;
  } else if (prediction == null) {
    ans = string.length;
  } else {
    ans = Array.from(string).reduce((prev, curr) => (prediction(curr) ? prev + 1 : prev), 0);
  }
  return ans;
}
