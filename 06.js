/**
 * Verifica se duas palavras são anagramas uma da outra.
 *
 * Critérios:
 * • O anagrama não pode repetir letras
 * • O anagrama deve utilizar apenas as letras de word
 * • O anagrama deve ter o mesmo tamanho que word(palavra)
 * • O anagrama deve ser um anagrama, ou seja, não é aceita a exata mesma combinação inicial de letras de word, elas precisam estar rearranjadas.
 *
 * @param {string} word - A primeira palavra.
 * @param {string} anagram - A segunda palavra.
 * @returns {boolean} Retorna true se as palavras são anagramas uma da outra, caso contrário retorna false.
 */
function isAnagram(word, anagram) {
  if (word.length !== anagram.length) {
    return false;
  }

  if (word === anagram) {
    return false;
  }

  const wordCount = {};

  for (let char of word) {
    wordCount[char] = wordCount[char] ? wordCount[char] + 1 : 1;
  }

  for (let char of anagram) {
    if (!wordCount[char]) {
      return false;
    }

    wordCount[char] -= 1;
  }

  return true;
}

/**
 * Seção de testes
 */
console.log(isAnagram('jarra', 'arraj')); // true
console.log(isAnagram('banana', 'nabana')); // true
console.log(isAnagram('rato', 'toca')); // false
console.log(isAnagram('rato', 'rato')); // false
