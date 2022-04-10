export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

const resultado = multiplicaArgs(1, 2, 3);
const resultado2 = concatenaStrings('leo', 'leleo');

console.log(resultado);
console.log(resultado2);
