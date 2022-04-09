/* eslint-disable */
let nome: string = 'Luiz';
let idade: number = 30;
let adulto:boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');

/* array */
let arrayDeNumero: Array<number> = [1,2,3];
let arrayDeNumero2: number[] = [1,2,3];
let arrayDeStrings: Array<string> = ['leo', 'aaa'];
let arrayDeStrings2: string[] = ['leo', 'aaa'];

/* Objetos */
let pessoa: {nome: string, idade:number, adulto?:boolean} = {
idade: 30,
nome: 'leo',
/* O tipo adulto foi declarado como não obrigatório */
};

function soma(x: number, y:number):number {
    return x + y;
}

const soma2: (x:number, y:number) => number = (x,y) => x+y;
