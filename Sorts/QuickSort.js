/*
 *  Quicksort
 *
 *  Prompt:    Given an unsorted array of integers, return the array
 *             sorted using quicksort.
 *
 *  Input:     input {Array}
 *  Output:    {Array}
 *
 *  Example:   [3,9,1,4,7] --> [1,3,4,7,9]
 */

// Worse Time Complexity: O(N^2)
// Worse Auxiliary Space Complexity: O(N)
// Average Time Complexity: O(Nlog(N))
// Average Auxiliary Space Complexity: O(log(N))
function quicksort(input) {
  function divide(start, end) {
    if (start >= end) { return; }
    let mid = start;
    let pivot = end;
    for (let i = start; i < end; i++) {
      if (input[i] < input[pivot]) {
        [input[i], input[mid]] = [input[mid], input[i]];
        mid++;
      }
    }
    [input[mid], input[pivot]] = [input[pivot], input[mid]];
    divide(start, mid - 1);
    divide(mid + 1, end);
  }

  divide(0, input.length - 1);
  return input;
}
