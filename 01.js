/**
 * Você precisa retornar true se s2 contêm uma permutação de s1, ou false caso contrario.
 * Em outras palavras, retorne true se uma das permutações de s1 for a substring de s2.
 *
 * @param {string} s1 - A primeira string.
 * @param {string} s2 - A segunda string.
 * @returns {boolean} Retorna true se s2 contem uma permutação de s1, ou false caso contrário.
 */
function permutate(s1, s2) {
  if (s1.length === 0 || s2.length === 0) {
    return false;
  }

  const charCount = {};
  for (let char of s1) {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  let start = 0;
  for (let end = 0; end < s2.length; end++) {
    const char = s2[end];
    if (charCount[char]) {
      charCount[char] -= 1;
      if (Object.values(charCount).every((count) => count === 0)) {
        return true;
      }
    } else {
      while (start < end) {
        const startChar = s2[start];
        if (charCount[startChar]) {
          charCount[startChar] += 1;
        }
        start++;
      }
    }
  }

  return false;
}

/**
 * Seção de testes
 */
console.log(permutate('qwd', 'wdfijewjewewswf')); // false
console.log(permutate('qwa', 'wqawsdfgt')); // true
