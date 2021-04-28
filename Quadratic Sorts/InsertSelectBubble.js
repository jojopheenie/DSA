/*Quadratic Sorts
 *
 *  Problem 1: Insertion Sort
 *
 *  Prompt:    Given an unsorted array of integers, return the array sorted
 *             using insertion sort.
 *
 *             What are the time and auxilliary space complexity?
 *
 *  Input:     input {Array}
 *  Output:    {Array}
 *
 *  Example:   [3,9,1,4,7] --> [1,3,4,7,9]
 *
 *
 *  Problem 2: Selection Sort
 *
 *  Prompt:    Given an unsorted array of integers, return the array
 *             sorted using selection sort.
 *
 *             What are the time and auxilliary space complexity?
 *
 *  Input:     input {Array}
 *  Output:    {Array}
 *
 *  Example:   [3,9,1,4,7] --> [1,3,4,7,9]
 *
 *
 *  Problem 3: Bubble Sort
 *
 *  Prompt:    Given an unsorted array of integers, return the array
 *             sorted using bubble sort.
 *
 *             What are the time and auxilliary space complexity?
 *
 *  Input:     input {Array}
 *  Output:    {Array}
 *
 *  Example:   [3,9,1,4,7] --> [1,3,4,7,9]
 */

'use strict';


// Time Complexity: O(N^2)
// Auxiliary Space Complexity: O(1)
function insertionSort(input) {
  for (let i = 0; i < input.length; i++) {
    let temp = input[i];
    let pointer = i;
    while (pointer > 0 && temp < input[pointer - 1]) {
      input[pointer] = input[pointer - 1];
      pointer--;
    }
    input[pointer] = temp;
  }
  return input;
}

// Time Complexity: O(N^2)
// Auxiliary Space Complexity: O(1)
function selectionSort(input){
  for (let i = 0; i < input.length; i++) {
    let min = input[i];
    let minIndex = i;
    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < min){
        min = input[j];
        minIndex = j;
      }
    }
    input[minIndex] = input[i];
    input[i] = min;
  }
  return input;
}


// Time Complexity: O(N^2)
// Auxiliary Space Complexity: O(1)
function bubbleSort(input){
  let swap;
  let endIndex = input.length;
  while (endIndex--){
    swap = false;
    for (let i = 0; i < endIndex; i++) {
      if (input[i] > input[i + 1]) {
        [input[i], input[i + 1]] = [input[i + 1], input[i]];
        swap = true;
      }
    }
    if (!swap) { break; }
  }
  return input;
}
