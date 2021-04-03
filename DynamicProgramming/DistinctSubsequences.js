/*501 - Distinct Subsequences
Given a string S and a string T, count the number of distinct subsequences of S which equals T.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

Input: 	 String, String
Output:  Int
Example
Input 1:  "rabbbit", "rabbit"
Output 1: 3

Subsequences:
rabbbit --> rabbit
^^^^ ^^
rabbbit --> rabbit
^^ ^^^^
rabbbit --> rabbit
^^^ ^^^

Input 2:  "a", ""
Output 2: 1 ("a" --> "")

Constraints
Time Complexity: O(N * M) with N being the length of string, and M being the length of the subsequence.
Auxiliary Space Complexity: O(N)
Solution
This can be solved using memoization (recursively).

In the outer parent function, initialize a cache.
Initialize a helper function that takes in two parameters: two indices (i, j), i for the original string and j for the subsequence. When calling the helper function at the bottom of your funtion, initialize both indices to 0, and return the result you would get from it.
Within the recursive function:
Base cases:
If you have reached the end of the original string with i, and the end of the subsequence with j, you have successfully found the subsequence in the original string, return 1.
If you have reached the end of the original string with i, but not the end of the subsequence, then return 0.
If you have reaached the end of the subsequence but not the end of the original string, return 1.
If both indices as keys exist in your cache, return the value at those indices.
Initialize a sum variable to 0
Check if the two characters at i and j in the original string and subsequence respectively match.
If so, add to the sum the recursive results of skipping the original character, or keeping it.
If not, add to the sum, only the recursive result of skipping a character from the original string.
Store the sum you have calculated at the key in your cache.
Return the value in the cache

Code
*/

var numDistinct = function(s, t) {
  var dp = Array(s.length).fill(0).map(_ => Array(t.length));
  return helper(s, t, 0, 0, dp);
};

var helper = function (s, t, sIndex, tIndex, dp) {
  if (tIndex === t.length) return 1;
  if (sIndex === s.length) return 0;
  if (dp[sIndex][tIndex] === undefined) {
    if (s[sIndex] === t[tIndex]) {
      dp[sIndex][tIndex] = helper(s, t, sIndex + 1, tIndex + 1, dp) + helper(s, t, sIndex + 1, tIndex, dp);
    } else {
      dp[sIndex][tIndex] = helper(s, t, sIndex + 1, tIndex, dp);
    }
  }
  return dp[sIndex][tIndex];
};

//Resources
https://leetcode.com/problems/distinct-subsequences/
//- Hard
