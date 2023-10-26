/**
 * Função que recebe uma string de números separados por vírgula e retorna a quantidade de números repetidos.
 * @param {string} input - String de números separados por vírgula.
 * @returns {number} - Quantidade de números repetidos.
 */
function countRepeatedNumbers(input) {
  const count = {};
  let repeatedNumbers = 0;
  const numbers = input.split(',').map(Number);

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (count[number]) {
      if (count[number] === 1) repeatedNumbers++;

      count[number]++;
    } else {
      count[number] = 1;
    }
  }

  return repeatedNumbers;
}

/**
 * Seção de testes
 */
console.log(countRepeatedNumbers('2,5,6,2,10,10')); // 2
console.log(countRepeatedNumbers('1,2,3,4,5,6')); // 0
