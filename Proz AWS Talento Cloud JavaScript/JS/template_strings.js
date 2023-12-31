// JavaScript 1

// Template string

// Quando trabalhamos com strings na linguagem JavaScript, 
// é muito comum precisarmos concatenar strings, 
// ou seja, juntar duas ou mais strings para gerar uma terceira.

// Contudo, com o aumento na complexidade das strings, 
// surgiu a necessidade de um recurso que permitisse trabalhar com elas de forma mais dinâmica. 
// Consequentemente, foram criados os templates strings.

// Concatenação na linguagem JavaScript

// Para demonstrar o conceito de concatenação, primeiro devemos acessar o site OneCompiler. 
// Ele permite escrever e executar códigos JS sem precisar alternar entre 
// o editor de códigos e o terminal do navegador. 
// No site, declaramos duas variáveis e salvamos nelas o valor de duas strings.

// Após isso, iremos declarar uma segunda variável, 
// que receberá a concatenação das duas primeiras variáveis como valor. 
// Para isso, basta chamar o nome da primeira variável, 
// seguida do operador de concatenação “+” e o nome da segunda variável. Nesse caso, 
// usamos o método console.log() para imprimir o resultado dessa terceira variável.

let nome = "Sergio";
let sobreNome = " Henrique";
console.log(nome + sobreNome);

// Clicamos no botão vermelho Run para executar nosso código. Veremos que o texto impresso será, 
// provavelmente, “RafaelPereira”, sem espaço entre os valores das variáveis nome e sobrenome. 
// Para corrigir isso, podemos concatenar uma terceira string com mais um operador de atribuição 
// depois da variável nome, 
// seguido de uma string contendo apenas um espaço (“ “).

let chamadaNome = "Ani";
let chamadaSobreNome = "Kelly";
let chamadaNomeCompleto = "meu nome é: " + chamadaNome + " " + chamadaSobreNome;
console.log(chamadaNomeCompleto);

// Ao executar o código dessa vez, devemos ver o texto “Rafael Pereira”. 
// Após isso, adicione a string “Meu nome é: ” 
// e mais um operador de concatenação ao começo da string concatenada.

// Assim, conseguimos concatenar duas ou mais strings para formar uma maior. 
// Isso pode ser feito escrevendo-as diretamente ou usando os nomes de variáveis com strings como valores 
// e colocando o operador de concatenação “+” antes de cada nova string.

// Interpolação na linguagem JavaScript

// Concatenar strings usando o método do exemplo anterior é uma solução simples e rápida 
// quando temos poucas variáveis e não precisamos personalizar a string resultante, 
// como definir um espaço entre duas strings, adicionar um novo texto no começo etc.

// Porém, o processo fica mais complexo e trabalhoso à medida em que 
// as strings forem ficando maiores e precisamos incluir mais valores salvos em variáveis.

// Para resolver isso, usaremos os templates strings. Com eles, 
// podemos ter só uma string e inserir os valores das novas variáveis nela. 
// Esse processo é conhecido como interpolação. 

// Para fazer isso, usamos dois acentos graves (``), usados para indicar crase, 
// ao invés das aspas simples ou duplas. 
// Podemos escrevê-las apertando a tecla Shift seguida da tecla de acento, 
// que fica ao lado da tecla P no teclado brasileiro.

// Com isso, podemos declarar uma nova variável embaixo do nosso código anterior e atribuir a frase “Meu nome é:”, 
// porém, entre os acentos graves e, por enquanto, sem os valores das variáveis.

// let templateString = `Meu nome é: `

// Para inserir os valores das nossas variáveis, precisamos usar o símbolo cifrão ($), 
// também conhecido como o símbolo do dólar, 
// seguido de duas chaves ({}) com o nome da variável dentro delas.

// ${nome-da-variavel}

// Vamos incluir os valores nome e sobrenome no nosso template string, 
// usando essa estrutura e imprimindo a variável templateString com o método console.log().

let templateString = `Meu nome é: ${nome} ${sobreNome}`

console.log(templateString)

// Ao executar o código, a string impressa no terminal deveria ser exatamente 
// a mesma que a do primeiro exemplo: “Meu nome é: Rafael Pereira”.

// Vantagens dos templates strings

// Além de poder escrever uma só string e inserir os valores desejados dentro dela, 
// os templates strings  nos oferecem vantagens não oferecidas pela concatenação e pelo uso de aspas. 
// As strings escritas com aspas não permitem quebra de linha, mas, 
// com os templates strings, podemos escrevê-las com quebras de linha sem causar erro 
// e elas serão interpretadas da mesma forma que escrevemos.

// let templateString = `Meu nome é ${nome},

// meu sobrenome é ${sobreNome}`

// console.log(templateString)
// Dessa forma, o nosso exemplo deve imprimir Meu nome é Rafael 
// em uma linha e meu sobrenome é Pereira na linha seguinte.

// Além disso, tudo que escrevemos dentro da estrutura ${ } é interpretado pelo computador como JavaScript. 
// Isso significa que podemos, por exemplo, 
// somar valores numéricos salvos em duas variáveis e o template string exibirá o resultado da soma. 
// Como:

let numA = 5;

let numB = 9;

let soma = `A soma de ${numA} e ${numB} é ${numA + numB}`

console.log(soma);

// Esse exemplo imprimirá a frase A soma de 5 e 9 é 14.

// Conclusão

// Percebeu como é fácil utilizar o template string nas suas programações? 
// Não deixe de continuar praticando suas aplicações no OneCompiler, 
// pois quanto mais você treinar, melhores serão os seus futuros resultados!


let num1 = 4;
let num2 = 5;

let somar = `A soma de ${num1} + ${num2} é ${num1 + num2}`
let subtracao = `A subtracao de ${num1} - ${num2} é ${num1 - num2}`
let multiplicacao = `A multiplicaçaõ de ${num1} x ${num2} é ${num1 * num2}`
let divisao = `A divisão de ${num1} / ${num2} é ${num1 / num2}`
console.log(somar,subtracao,multiplicacao,divisao);

