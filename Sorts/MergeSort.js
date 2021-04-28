/**
 *  Homework 08 - Quasilinear Sorts
 *
 *  Problem 1: Mergesort
 *
 *  Prompt:    Given an unsorted array of integers, return the array
 *             sorted using mergesort.
 *
 *  Input:     input {Array}
 *  Output:    {Array}
 *
 *  Example:   [3,9,1,4,7] --> [1,3,4,7,9]
 */

// Worst Time Complexity: O(N * log(N))
// Worst Total (Call Stack + Auxiliary) Space Complexity: O(N)
// Average Time Complexity: O(N * log(N))
// Average Total (Call Stack + Auxiliary) Space Complexity: O(N)
// Stability: Stable
function mergesort(input) {
  function merge(arr1, arr2){
    const totalElements = arr1.length + arr2.length;
    let result = [];
    let i = 0;
    let j = 0;
    while (i + j < totalElements) {
      if (j >= arr2.length || (i < arr1.length && arr1[i] <= arr2[j])){
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    return result;
  }

  function divide(arr) {
    if (arr.length < 2) { return arr; }
    const mid = Math.floor(arr.length / 2);
    return merge(divide(arr.slice(0, mid)), divide(arr.slice(mid)));
  }

  return divide(input);
}
