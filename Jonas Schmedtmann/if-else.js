const peso = prompt('Qual seu peso?');
const altura = prompt('Qual sua altura?');

calculo1 = peso / altura ** 2;
console.log(`${calculo1}`);

const peso2 = prompt('Qual seu peso?');
const altura2 = prompt('Qual sua altura?');

calculo2 = peso2 / altura2 ** 2;
console.log(`${calculo2}`);

total = calculo2 - calculo1;

if (calculo1 > calculo2) {
    console.log(`A primeira pessoa pesa mais do que a segunda`);
} else {
    console.log(`O peso da segunda pessoa é ${total} maior do que o da primeira.`);
