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

//CONDICIONAL//
// if//

if(true){
    console.log("é verdadeiro")
}

let exemplo2=1
if (exemplo2 ==1){
    console.log("esta correto")
}

//if / else//
let nome2 ="Fiap";

if (nome2 =="fiap"){
    console.log("nome correto")
    document.write("Nome correto")
}
else{
    console.log("Nome errado")
    document.write("Nome errado")
}

//IF encadeado ou alinhado//

let idade2 =13;
if(idade2 <=14){
    console.log("Não pode entrar, é menó")
}
else if(idade2 >14 && idade2 <=18){
    console.log("Pode entrar e curtir baiano")
}
else if(idade2 > 18 && idade <=50){
    console.log("Perigo, seus pais estão na balada")
}
else{
    console.log("Voce deveria estar no sofá assistindo netflix")
}

//SWITCH CASE//

let time ="Gremio";

switch(time){
case "Gremio":
    console.log("Melhor time")
    break;
case "Sao Paulo":
    console.log("É tão ruim que não gaha em casa")
    break;
case "Internacional":
    console.log("Simplesmente horrível")
    break;
default:
    console.log("Nenhuma das opções valídas(botafogo)")
}

//Termario

let valor=101;
let resultado = valor ==100 ? "Valor certo": "Valor errado";
console.log(resultado);

let nota =6;
let resultado2 = nota ==6 ? "Aprovado": "Reprovado!";
console.log(resultado2);

//ESTRUTURA DE REPETIÇÃO//

for(let i =0; i<10;i++){
    console.log("o valor de I é", i)
}

//while//

let g=0;
while(g <10){
    console.log("O valor de g é", g)
    g++;
}

//do while



//JOGO DE ADIVINHAÇÃO//
//declarando uma variavel indefinida//
let palpite;

const sorteio = Math.floor(Math.randon() * 10)+1;

do{
    palpite = parseInt(prompt("escolha um nmero entre 1 e 10"))
}while(palpite !== sorteio)

alert(`Parabéns Voce ganhou o jogo!${palpite}`)

//funções

function saudacao(nome3){
    console.log(`Seja bem vindo $(nome)`)
    console.log("Seja bem vindo", nome)
}
saudacoes("Fiap")
