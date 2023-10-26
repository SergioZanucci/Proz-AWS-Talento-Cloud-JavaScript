console.log("Hello world");
let num1 = 15;
let num2 = 27;
console.log(num1 + num2);

function imprimirNoTerminal() {
    console.log("Conexão feita com sucesso!");
  }

imprimirNoTerminal();
imprimirNoTerminal();
imprimirNoTerminal();


let adicionandoTexto = document.querySelector("#titulo");
console.log(adicionandoTexto);
console.log(adicionandoTexto.innerText, "Texto adicinado");

let container = document.querySelector(".container");
console.log(container);
console.log(container.innerText);
console.log(container.innerHTML);

// As propriedades innerText e innerHTML são simples e nos permitem manipular os elementos do DOM de forma muito ampla. 
// Como orientação geral, é recomendado usar a propriedade innerText quando queremos mudar apenas o texto de um elemento HTML 
// que não possui elementos filhos, pois, caso existam, eles serão substituídos pelo novo texto.

// container.innerHTML = `
// <h2>Novo titulo</2>
// <li>Lista JS</li>
// <li>Lista JS</li>
// <li>Lista JS</li>`

// Já a propriedade innerHTML é melhor ser usada quando queremos alterar o conteúdo HTML de qualquer elemento do DOM, 
// podendo incluir os elementos filhos, nomes de classe e qualquer outro atributo que os elementos HTML possam receber.