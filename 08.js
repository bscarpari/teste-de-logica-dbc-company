/*
  [ INCOMPLETO ]

  Suponha que você tem uma mochila com uma capacidade máxima de peso W e uma lista de itens, cada um com um peso Wi e um valor Vi. O objetivo é determinar
  a seleção de itens a serem colocados na mochila de modo a maximizar o valor total dos itens, respeitando a restrição de que a soma dos pesos dos itens na
  mochila não pode exceder a capacidade máxima W. A capacidade máxima da mochila de capacity = 5, implemente um algoritmo de programação dinâmica que
  determina o valor máximo que pode ser colocado na mochila e fornece a lista de itens selecionados para alcançar esse valor.
  
  Você foi desafiado a resolver o Problema da Mochila usando programação dinâmica. O problema envolve selecionar um subconjunto de itens com valores e pesos
  específicos para maximizar o valor total, respeitando a capacidade máxima de uma mochila.
  Dado o seguinte conjunto de itens:
 
  Siga o exemplo da mensagem de output descrita abaixo: 
  Exemplo de entrada 1:
  values = [3, 4, 5, 6]
  weights = [2, 3, 4, 5]
  capacity = 5
*/
function convertToArray(input) {
  const [values, weights, capacity] = input.split('\n');
  return [values, weights, Number(capacity)];
}

function result(input) {
  const [values, weights, capacity] = convertToArray(input);
  let items = [];

  for (let i = 0; i < values.length; i++) {
    items.push({
      value: Number(values[i]),
      weight: Number(weights[i]),
    });
  }

  items.sort((a, b) => {
    return a.value / a.weight - b.value / b.weight;
  });

  let currentWeight = 0;
  let totalValue = 0;
  let totalWeight = 0;

  for (let item of items) {
    if (currentWeight + item.weight <= capacity) {
      currentWeight += item.weight;
      totalValue += item.value;
      totalWeight += item.weight;
    }
  }

  return `${totalValue}\n[${items.map((item) => item.value).join(', ')}]`;
}

/* 
  TEST 1

  INPUT 
  Exemplo de entrada 1:
  [3, 4, 5, 6]
  [2, 3, 4, 5]
  5

  OUTPUT
  11
  [3, 2, 0]
*/
console.log(result('[3, 4, 5, 6]\n[2, 3, 4, 5]\n5'));
