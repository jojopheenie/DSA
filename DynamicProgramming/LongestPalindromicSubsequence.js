/*315 - Longest Palindromic Subsequence
Given a string of lowercase characters (a-z), return the length of the longest palindromic subsequence.

Subsequence: a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

For example, the sequence ⟨A, B, D⟩ is a subsequence of ⟨A, B, C, D, E, F⟩ obtained after removal of elements C, E, and F.

https://en.m.wikipedia.org/wiki/Subsequence

Input: {String}
Output: {Integer}
Example
Input:  "vtvvv"
Output: 4

Longest palindromic subsequence here is "vvvv"


Input:  "pwnnb"
Output: 2

Longest palindromic subsequence here is "nn"


Input:  "ttbtctcbt"
Output: 7

Longest palindromic subsequence here is "tbtctbt"
Constraints
Time Complexity:			        O(N^2)
Auxiliary Space Complexity: 		O(N^2)
Solution
For our solution, we'll be making use of helper method recursion.

The overall idea here is to operate off of the idea of the smallest possible cases. Imagine we have a single character. We already know that the answer for this is going to be 1. This is going to be one of the base cases.

Now imagine a slightly larger case to have two characters. There are two possible options:

Characters match => Longest palindromic subsequence length is 2
Characters do not match => Longest palindromic subsequence length is 1
All of the cases we've mentioned so far will form the basis of our base cases later on in our helper method.

As far as where we begin, we'll always be comparing the distal (left-most and right-most) characters of whichever string we're inspecting. If the characters match, we know for sure that however long the Longest Palindromic Subsequence is, it must have a length of at least 2. From here, we'll search inwards to see if there are more matches. If they don't match, this means that the Longest Palindromic Subsequence will lie somewhere farther in, maybe using either the left-most or right-most characters.

Let's get to the steps of helper method recursion that our function will follow:

Instantiate a cache
The keys will be strings representing two pointers
The values will be integers representing the best answer for the range covered by those two pointers.
No need to return any state variables. We'll be instead returning the function call.
Instantiate a helper method called find. This helper method wants to find the length of the longest palindromic subsequence
There are two arguments for find. Both are integers. We'll call them left and right.
Invoke the helper method with left set to zero, and right set to the length of the input string minus one
Base cases
If left and right are both on the same index, return 1
If left and right are one index away from either, check the characters they are in the string.
If same, return 2
If different, return 1
Recursive cases - If we pass the base cases, this means the pointers are two or more indexes away from each other. Two scenarios here for recursion:
Left and right characters are the same => Return 2 plus recursive call of find on left+1 and right-1
Left and right characters are not the same => Return the max of either the recursive call of find on left + 1, right or left, right - 1.
Note: To make use of the cache, simply cache the results of the recursive calls before returning them. Additionally, introduce a base case to check the cache if you've arrived at left/right pointer coordinates that have already been visited. In this case, simply return whatever is in the cache.

Code
*/

var longestPalindrome = function(s) {
  var start = 0;
  var end = 0;
  var len = s.length;
  var num = 0;
  for (var i = 0; i < len; i++) {
    num = Math.max(expandAroundCenter(s, i, i), expandAroundCenter(s, i, i + 1));
    if (num > end - start) {
      start = i - Math.floor((num - 1) / 2);
      end = i + Math.floor(num / 2);
    }
  }
  return s.slice(start, end + 1);
};

var expandAroundCenter = function (s, left, right) {
  var l = left;
  var r = right;
  var len = s.length;
  while (l >= 0 && r < len && s[l] === s[r]) {
    l--;
    r++;
  }
  return r - l - 1;
};

//Resources
//https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/
//- Medium
