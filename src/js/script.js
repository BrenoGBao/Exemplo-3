// DECLARAÇÃO DE VARIAVEIS
 //ANALISAR NO CONSOLE DA PAGINA
var nome = "Fiap";
console.log(nome)

let idade =19;
console.log(idade)

const sobrenome = "Fiapinho";
console.log(sobrenome)

// undefined
let exemplo;
console.log(exemplo)

// nula
let exemplo1 =null
console.log(exemplo1)

// tipo de variaveis
let ex1 = "Fiap";
console.log(typeof ex1)

let ex2 = 25;
console.log(typeof ex2)

let ex3 = true;
console.log(typeof ex3)

let ex4 = {};
console.log(typeof ex4)

let ex5 = []; 
console.log(typeof ex5)

//CONVERSÕES
//FLOAT => STRING

let numfloat =123.456;
console.log(numfloat.toString())

//STRING PARA FLOAT
let numString ="12.965"
console.log(parseFloat(numString))

//INT PARA STRING

let numInt =1748;
console.log(numInt.toString())

//STRING PARA INT

let numstring2 ="123"
console.log(parseInt(numstring2))

//METODOS//

//METODO LENGTH - VERIFICA O TAMANHO DA STRING

let frase="O mundo da tecnologia"
console.log(frase.length)

//METODO indexof - RETORNA UM TRECHO DO SEU CÓDIGO

let texto ="Programação Sustentável ão"
console.log(texto.lastIndexOf('ão'))

//MÉTODO SLICE - RETORNA PARTE DE UM TEXTO PASSANDO INICIO E O FINAL
let info="Programação de ponta";
console.log(info.slice(12,20))

//OPERADORES ARITIMÉTICOS

const a = 10;
const b = 20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//OPERADORES LÓGICOS

const c = 20;
const d = 30;
console.log(c<d);
console.log(c>d && c>10); // '&&' = 'and'//
console.log(c>d || d>c); // '||' significa 'or'//
console.log(c == d || d<=c)

//OPERADORES DE COMPARAÇÃO//

const e = 10;
const f = 30;
console.log(e==f);
console.log(e===f);
console.log(e != f)


