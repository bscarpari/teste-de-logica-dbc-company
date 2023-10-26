/*
  [ INCOMPLETO ]

  Suponha que você tenha um conjunto de números inteiros positivos. O objetivo é
  determinar se é possível dividir esse conjunto em dois subconjuntos, de forma
  que a soma dos números em cada subconjunto seja a mais próxima possível.
  
  Escreva um algoritmo que, dada uma lista de números inteiros, determine se é possível dividi-los em
  dois subconjuntos com somas aproximadamente iguais.
  
  Entrada:
  A entrada consiste em duas linhas:
  A primeira linha contém um número inteiro positivo n (1 n 20), que representa o número de elementos no conjunto.
  A segunda linha contém n números inteiros positivos separados por espaços, representando os elementos do conjunto (1 número 100).
  
  Saída:
  A saída do algoritmo deve ser uma única linha:
  "Sim" se for possível dividir o conjunto em dois subconjuntos com somas aproximadamente iguais.
  "Não" se não for possível dividir o conjunto dessa maneira.
*/
function convertToArray(input) {
  const [number, array] = input.split('\n');
  let numbers = array.split(' ');

  numbers = numbers.map(Number);

  return [Number(number), numbers];
}

console.log(convertToArray('4\n1 5 11 5')); // [4, [1, 5, 11, 5]]

function result(input) {
  const numbers = convertToArray(input);
  const sum = numbers.reduce((acc, number) => acc + number, 0);
  const half = sum / 2;
  let currentSum = 0;
  let possibleSums = new Set([0]);

  for (let number of numbers) {
    let newSums = new Set();

    for (let possibleSum of possibleSums) {
      let newSum = possibleSum + number;

      if (newSum <= half) {
        newSums.add(newSum);
      }
    }

    possibleSums = new Set([...possibleSums, ...newSums]);
  }

  if (possibleSums.has(half)) {
    return 'Sim';
  } else {
    return 'Não';
  }
}

// Testes
console.log(result('4\n1 5 11 5')); // Sim
console.log(result('3\n1 3 5')); // Não
