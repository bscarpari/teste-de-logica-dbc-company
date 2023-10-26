/**
 * Conta o número de ocorrências do dígito 1 em todos os números não negativos menores ou iguais a n.
 * @param {number} n - O número inteiro a ser verificado.
 * @returns {number} - A contagem do dígito 1 em todos os números de 0 a n.
 */
function countDigitOneOccurrences(n) {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    let num = i;

    while (num > 0) {
      if (num % 10 === 1) count++;

      num = Math.floor(num / 10);
    }
  }

  return count;
}

/**
 * Seção de testes
 */
console.log(countDigitOneOccurrences(2)); // 1
console.log(countDigitOneOccurrences(15)); // 8
