// Example 1:
// Input: “ABCDEFGABEF”
// Output: 7
// Explanation: The longest substring without repeating characters are “ABCDEFG”, “BCDEFGA”, and “CDEFGAB” with lengths of 7

// Example 2:
// Input: “GEEKSFORGEEKS”
// Output: 7
// Explanation: The longest substrings without repeating characters are “EKSFORG” and “KSFORGE”, with lengths of 7


function longestSubstringWithoutRepeating(s) {
    debugger
    let maxLength = 0;
    let start = 0;
    let charIndexMap = {};

    for (let end = 0; end < s?.length; end++) {
        const currentChar = s[end];
        if (charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }
        charIndexMap[currentChar] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
const s = "abcabcbb";
// Driver code
    var str = "geeksforgeeks";
console.log(longestSubstringWithoutRepeating(str)); 

    console.log("The input string is " + str);