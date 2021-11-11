// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) return false;
    const originalRangeData = {"a": 26, "b": 27, "c": 28, "d": 29, "e": 30, "f": 31, "g": 32, "h": 33, "i": 34, "j": 35, "k": 36, "l": 37, "m": 38, "n": 39, "o": 40, "p": 41, "q": 42,
    "r": 43, "s": 44, "t": 45, "u": 46, "v": 47, "w": 48, "x": 49, "y": 50, "z": 51}
    const extendedRangeData = {
     1: "b",  2: "c",  3: "d",  4: "e",  5: "f",  6: "g",  7: "h",  8: "i",  9: "j", 10: "k", 11: "l", 12: "m", 13: "n", 14: "o", 15: "p", 16: "q", 17: "r", 18: "s", 19: "t",
    20: "u", 21: "v", 22: "w", 23: "x", 24: "y", 25: "z", 26: "a", 27: "b", 28: "c", 29: "d", 30: "e", 31: "f", 32: "g", 33: "h", 34: "i", 35: "j", 36: "k", 37: "l", 38: "m", 
    39: "n", 40: "o", 41: "p", 42: "q", 43: "r", 44: "s", 45: "t", 46: "u", 47: "v", 48: "w", 49: "x", 50: "y", 51: "z", 52: "a", 53: "b", 54: "c", 55: "d", 56: "e", 57: "f", 
    58: "g", 59: "h", 60: "i", 61: "j", 62: "k", 63: "l", 64: "m", 65: "n", 66: "o", 67: "p", 68: "q", 69: "r", 70: "s", 71: "t", 72: "u", 73: "v", 74: "w", 75: "x", 76: "y"
    }
    const characterStaging = []
    if (!encode) {
      shift = -(shift)
    }
    for(let i = 0; i < input.length; i++) {
    const intVal = originalRangeData[input[i].toLowerCase()]
    if (intVal) {
      const cyphNum = intVal + shift
      characterStaging.push(extendedRangeData[cyphNum])
    } else {
      characterStaging.push(input[i])
    }
    }
    const result = characterStaging.join("")
    return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
