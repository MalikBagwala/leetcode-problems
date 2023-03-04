/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  let totalLength = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " && totalLength === 0) {
      continue;
    } else if (s[i] === " " && totalLength !== 0) {
      return totalLength;
    } else {
      totalLength += 1;
    }
  }
  return totalLength;
}

function optimizedLengthOfLastWord(s) {
  let trimmedString = s.trim();
  return trimmedString.length - trimmedString.lastIndexOf(" ") - 1;
}

let output = lengthOfLastWord("   fly me   to   the moon  ");
output = lengthOfLastWord("luffy is still joyboy");
output = lengthOfLastWord("Hello World");
output = lengthOfLastWord("s");
console.log(output);
