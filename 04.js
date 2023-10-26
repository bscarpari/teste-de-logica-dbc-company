/**
 * Converte um número decimal em sua representação binária.
 *
 * @param {number} input O número decimal a ser convertido.
 * @returns {string} A representação binária do número decimal.
 */
function decimalToBinary(input) {
  return parseInt(input).toString(2);
}

/**
 * Seção de testes
 */
console.log(decimalToBinary('3')); // 11
console.log(decimalToBinary('233')); // 11101001
