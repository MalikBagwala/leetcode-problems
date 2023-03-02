// https://leetcode.com/problems/longest-common-prefix/

// 1. set the first string as the prefix eg. "flower"
// 2. loop through the rest of the strings
// 3. if the current string does not start with the prefix, remove the last character from the prefix
// "flower" - "r" = "flow"

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}

let output = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(output); // --> "fl"
