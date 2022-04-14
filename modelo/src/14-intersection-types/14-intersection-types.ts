/* & = AND */

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemIdade & TemSobrenome & TemNome;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersecao = AB & AC;

const pessoa: Pessoa = {
  nome: 'leo',
  idade: 30,
  sobrenome: 'leitao',
};

console.log(pessoa);

export { pessoa };
