//obs: a chave B não pode ser alterada
const objetoA: {
  chaveA: string;
  readonly chaveB: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'valor B',
};

objetoA.chaveA = 'outro Valor';
