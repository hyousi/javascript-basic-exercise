export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.


  if (array == null) {
    throw new Error('Creating list from undefined array');
  } else if (array.length === 0) {
    throw new Error('Creating list from empty array');
  } else {
    const headNode = { value: array[0], next: null };
    let ptr1 = headNode;
    let ptr2 = 1;
    while (ptr2 < array.length) {
      ptr1.next = { value: array[ptr2], next: null };
      ptr1 = ptr1.next;
      ptr2 += 1;
    }
    return headNode;
  }
}
