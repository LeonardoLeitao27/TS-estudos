//usar o restoperator para definir o tipo dos valores restantes
const dadosCliente: [number, string] = [1, 'leo'];
const dadosCliente2: [number, string, ...number[]] = [1, 'leo'];

dadosCliente[0] = 2;

dadosCliente2[2] = 2;
dadosCliente2[3] = 3;

console.log(dadosCliente);
console.log(dadosCliente2);
