// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const characterIndex = {"a":  0, "b":  1, "c":  2, "d":  3, "e":  4, "f":  5, "g":  6, "h":  7, "i":  8, "j":  9, "k": 10, "l": 11, "m": 12, "n": 13, "o": 14, "p": 15, "q": 16,
       "r": 17, "s": 18, "t": 19, "u": 20, "v": 21, "w": 22, "x": 23, "y": 24, "z": 25}

  function uniqueCheck(alphabet) {
    let uniqueCheck = true;
    if (alphabet) { 
      for(let i = 0; i < alphabet.length; i++) {
      const first = alphabet[i]
      for(let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[j] === first) {
          uniqueCheck = false
          }
        }
      }
    }
    return uniqueCheck
  }     

  function substitution(input, alphabet, encode = true) {
    const unique = uniqueCheck(alphabet)
    if (!alphabet || alphabet.length !== 26 || !unique) return false; 
    const characterStaging = []
    for(let i = 0; i < input.length; i++) {
      if (encode) {
        const index = characterIndex[input[i].toLowerCase()]
        if (input[i] !== " ") {
          characterStaging.push(alphabet[index])
        } else {
          characterStaging.push(" ")
        }        
      } else if (!encode) {
        const characterArray = Object.keys(characterIndex).sort((a, b) => a > b ? 1 : -1)
        for(let j = 0; j < alphabet.length; j++) {
          if (input[i] === alphabet[j]) {
            characterStaging.push(characterArray[j])
          } else if (input[i] === " ") {
            characterStaging.push(input[i])
            break
          }
        }
        //We need to know the input character, the index of that character on ALPHABET, and then use that index to find the letter it should be
      }
    }
    const result = characterStaging.join("")
    return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
