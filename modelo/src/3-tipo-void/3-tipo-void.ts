function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'luiz',
  sobrenome: 'otavio',

  exibirnome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Luiz');
pessoa.exibirnome();

export { pessoa };
