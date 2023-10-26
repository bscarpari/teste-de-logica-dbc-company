/**
 * Rotaciona um array para a direita k vezes e retorna o resultado como uma string separada por vírgulas.
 *
 * @param {number} length - O tamanho do array.
 * @param {Array} array - O array a ser rotacionado.
 * @param {number} k - O número de vezes que o array deve ser rotacionado para a direita.
 * @returns {string} - O array rotacionado como uma string separada por vírgulas.
 */
function rotateArr(input) {
  let [length, array, k] = input.split('\n');

  length = Number(length);
  array = array.split(',').map(Number);
  k = Number(k);

  const result = [];

  for (let i = 0; i < length; i++) {
    const newIndex = (i + k) % length;
    result[newIndex] = array[i];
  }

  return result.join(',');
}

/**
 * Seção de testes
 */
console.log(rotateArr('10\n16,1,26,2,45,6,45,24,3,62\n9')); // 1,26 ... 62, 16
console.log(rotateArr('9\n1,2,4,33,13,42,65,96,73\n9')); // 1, 2 ... 96, 73
