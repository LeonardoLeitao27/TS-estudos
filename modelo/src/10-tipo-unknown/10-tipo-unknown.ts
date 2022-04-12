let x: unknown;
x = 100;
x = 'luiz';

if (typeof x === 'number') x = x + x;

console.log(x);
/* O tipo unknown pede para que antes de fazer qualquer operação  seja feita uma verificação de tipo */
