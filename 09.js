/*
  [ INCOMPLETO ]

  Pafúncio é fã do jogo antigo Age of Empires II. Ela passa várias horas jogando. O jogo possui 4 recursos que precisam ser coletados para ajudar na evolução e
  construção de edifícios:

  • Ouro
  • pedra
  • Madeira
  • Comida (coletada por fazendas)
  
  Além disso, existem 4 idades de evolução:
  • Idade das Trevas
  • Idade Feudal
  • Idade dos Castelos
  • Idade Imperial
  
  Com base nesse contexto, crie um programa que lista a quantidade de cada recurso (ouro, pedra, madeira e comida) que Pafúncio possui em cada idade de
  evolução. Ao final, o programa também mostra a quantidade total de recursos em todos os níveis e a soma geral dos valores das sacas.
*/
function result(input) {
  const price = Number(input);
  let discount = 0.05;
  let totalPrice = 0;

  for (let i = 1; i <= 10; i++) {
    const unitPrice = price - price * discount;
    totalPrice += unitPrice;
    console.log(`${i} ${unitPrice.toFixed(2)} ${totalPrice.toFixed(2)}`);
    discount += 0.05;
  }

  return totalPrice.toFixed(2);
}

// Testes
console.log(result('2.00'));
console.log(result('15.90'));
