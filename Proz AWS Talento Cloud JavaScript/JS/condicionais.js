let nota = 9;

if(nota >= 8) {
    console.log('Muito bem');
}else{
    console.log('Precisa melhorar!');
}

// código if else estrutura condicional

let semaforo = 'Verde';

if(semaforo == 'Verde') {
    console.log('Prossiga');
} else if(semaforo == 'Vermelho') {
    console.log('Pare');
} else {
    console.log('Atenção!');
}
    
// codigo condicionais e booleanos em js
// As condições das nossas estruturas condicionais podem incluir números 
// (como nos exemplos anteriores), incluir strings:
// Exemplo

let meuInstrumento = "Violao";

if (meuInstrumento == "Piano"){

    console.log("Você é um pianista!");

} else {

    console.log("Você não é um pianista");
}
// Imprimirá 'false' pois meuInstrumento não é 'piano'


// Condicionais e booleanos em JS
// E também podem incluir valores booleanos:
// Exemplo

let finDeSemana = false;

if(finDeSemana == true){
    console.log("Vai descansar!");
} else {
    console.log("Temos que trabalhar");
}
// Imprimirá 'Temos que trabalhar'


// Contudo, JavaScript nos permite escrever a condição entre parênteses 
// (finDeSemana == true) de uma forma mais simples: apenas colocando o nome da variável. 
// O seguinte exemplo funcionará exatamente igual ao código anterior:

// Condicionais e booleanos em JS
// Exemplo
let finsDeSemana = false;

if(finsDeSemana){
    console.log("Vai descansar!");
} else {
    console.log("Temos que trabalhar");
}
// Imprimirá 'Temos que trabalhar'


// Condicionais e booleanos em JS
// Sempre que trabalhamos com variáveis que guardam valores booleanos 
// em JS podemos verificar sua “veracidade” apenas chamando o nome da variável. 
// Já se quisermos verificar se o valor do booleano é falso,
//  podemos usar o operador de negação (!) antes do nome da variável:
// Exemplo

let finssDeSemana = false;

if(!finssDeSemana){
    console.log("Temos que trabalhar.");
} else {
    console.log("Vai descansar!");
}
// Imprimirá 'Temos que trabalhar'

// Perceba que como agora o primeiro bloco condicional está verificando se a variável finDeSemana é falsa, 
// a mensagem impressa é o que fazer num dia de semana. 
// Já como o segundo bloco de código (no else) que é executado caso finDeSemana for verdadeiro, 
// imprime agora a mensagem relativa ao final de semana. Para efeitos práticos, 
// este código funciona exatamente igual aos dois códigos anteriores. 
// Este é um exemplo de como podemos chegar no mesmo resultado escrevendo algoritmos e códigos distintos.

// - MDN Web Docs. Tomando decisões no seu código — condicionais. Disponíevl em:
// [https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals). 
// Acesso em: 15 de nov. 2022

// - DevMedia. JavaScript if/else: criando scripts com estruturas condicionais. Disponível em: [https://www.youtube.com/watch?v=8UXQ6S0KURk]
// (https://www.youtube.com/watch?v=8UXQ6S0KURk). Acesso em 15 de nov. 2022


let orcamento = 400;
if (orcamento > 650) {
    console.log('Vamos comemorar!');
}else{
    console.log('Melhor não gastar!');
}

let cpf = false
if (cpf != true){
    console.log('Valido');
}else{
    console.log('Invalido');
}



