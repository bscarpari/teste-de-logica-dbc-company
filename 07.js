/**
 * Calcula o preço unitário e o preço total de um produto com desconto progressivo.
 * @param {number} input - O preço original do produto.
 * @returns {string} Uma string contendo o preço unitário e o preço total para cada quantidade de produto, separados por linha.
 */
function calculateDiscountedPrices(input) {
  let output = '';
  let discount = 0.05;
  const price = Number(input);

  for (let i = 1; i <= 10; i++) {
    const unitPrice = price - price * discount;
    const totalUnitPrice = unitPrice * i;

    output += `${i} ${unitPrice.toFixed(2)} ${totalUnitPrice.toFixed(2)}\n`;

    discount += 0.05; // 0.05 a 0.50
    if (discount > 0.5) {
      discount = 0.5;
    }
  }

  return output;
}

/**
 * Seção de testes
 */
console.log(calculateDiscountedPrices('2.00'));
/* 
  1   1.90 1.90
  2   1.80 3.60
  3   1.70 5.10
  4   1.60 6.40
  5   1.50 7.50
  6   1.40 8.40
  7   1.30 9.10
  8   1.20 9.60
  9   1.10 9.90
  10  1.00 10.00 
*/

console.log(calculateDiscountedPrices('15.90'));
/*
  1   15.11 15.11
  2   14.31 28.62
  3   13.52 40.55
  4   12.72 50.88
  5   11.93 59.62
  6   11.13 66.78
  7   10.34 72.34
  8   9.55  76.32
  9   8.75  78.71
  10  7.95  79.50
*/
