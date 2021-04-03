/*222 - Consecutive Subarray Sum
Given an array of positive integers and a target value, return true if there is a subarray of consecutive elements that sum up to this target value.

Input: Array of integers, target value
Output: Boolean
Example
Input: [6,12,1,7,5,2,3], 14      	=>	Output: true (7+5+2)
Input: [8,3,7,9,10,1,13], 50		=>	Output: false

Constraints
Time Complexity: O(N)
Auxiliary Space Complexity: O(1)
All elements are positive

Solution
Instantiate ‘current_sum’ equal to the first element
Instantiate ‘start’ as 0 as an index representing the start of the sum.
Loop through array starting from 1.
Add current value to ‘current_sum’.
a) If ‘current_sum’ exceeds the ‘target’ perform a while loop until ‘current_sum’ is less than or equal to ‘target’.
b) In the while loop subtract off the value at ‘start’ and then increment ‘start’
If ‘current_sum’ is equal to the target value, return true.
If the loop is completed without a matching sum, return false.
Notes
Asked at Amazon and Facebook

Code
*/

//Resources
//https://www.geeksforgeeks.org/find-subarray-with-given-sum/
//- Medium
