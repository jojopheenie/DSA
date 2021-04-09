/* 509. Fibonacci Number
 - easy
 - https://leetcode.com/problems/fibonacci-number/

 The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

Constraints:
0 <= n <= 30

                          fib(5)
                          /                \
                    fib(4)                fib(3)
                  /        \              /       \
              fib(3)      fib(2)         fib(2)   fib(1)
             /    \       /    \        /      \
       fib(2)   fib(1)  fib(1) fib(0) fib(1) fib(0)
       /     \
     fib(1) fib(0)

Code
*/

var fib = function(n) {

/* RECURSION
Time: O(2^n)
Space: O(n)

     if (n <= 1) return n
     return fib(n-1) + fib(n-2)
*/

/* ITERATIVE with place holders
Time: O(n)
Space: O(1)
*/
      if (n <= 1) return n
      if (n == 2) return 1

      let current = 0, prev1 = 1, prev2 = 1;

      for (i = 3; i <= n; i++) {
          current = prev1 + prev2
          prev2 = prev1
          prev1 = current
      }
      return current
  };

