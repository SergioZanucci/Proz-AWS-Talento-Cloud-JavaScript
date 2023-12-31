// JavaScript 1

// Criando elementos no DOM

// No conteúdo anterior, vimos como manipular o texto e o conteúdo de qualquer elemento HTML 
// com a linguagem JavaScript via o DOM.

// Porém, cabe destacar que nem sempre queremos substituir o conteúdo de um elemento para outro, 
// como aprendemos na aula. Às vezes, apenas precisamos adicionar um conteúdo novo, 
// sem apagar ou manipular o conteúdo original do elemento.

// Como em tudo na programação, existem várias formas de adicionar conteúdos a elementos HTML. 
// Porém, nessa aula, aprenderemos uma forma simples e eficiente para fazer essa ação usando os métodos 
// createElement e appendChild.

// Setup de arquivos
// Para este conteúdo, usaremos como exemplo um projeto simples com dois arquivos: index.html e script.js.

// O arquivo index segue o padrão da estrutura base da HTML. Dentro da tag <body> </body>, 
// são encontrados os elementos que podemos ver na imagem.

// Como é possível observar, temos dois elementos principais na nossa página: 
// uma lista não ordenada de linguagens  e uma seção de postagens contendo divs. 
// Nessa última, cada div tem um subtítulo e um texto sobre uma linguagem.

// Além disso, dentro da tag <head></head>, 
// incluímos a tag <script src="script.js" defer ></script> para criar a conexão com o arquivo script.js, 
// que está na mesma pasta que o index.html.

// Adicionando elementos simples
// Para adicionar um elemento à lista não ordenada, seguiremos três etapas:

// criar um elemento HTML;

// popular e manipular esse elemento HTML;

// adicionar o elemento HTML no DOM.

// Primeira etapa

// Sabemos que nossa lista não ordenada contém elementos <li>, 
// portanto, vamos criar um <li> e salvá-lo em uma variável para facilitar sua manipulação na próxima etapa.

// Iniciaremos chamando o objeto “Document” e usando o método dele .createElement(). 
// Esse método recebe como argumento uma string com o nome do elemento que queremos criar.

// O nome do elemento será o mesmo que usaremos para abrir e fechar as tags dos elementos HTML. Assim, 
// passamos como argumento o valor “li”:

// document.createElement("li");

// Esse método é uma função que retorna o elemento <li> adicionado na lista. Para conseguir manipulá-lo, 
// iremos salvar o retorno do método em uma variável, declarando ela e usando o operador de atribuição “=”. 
// Observe a imagem.

// Além disso, iremos imprimir o elementoJavaScript com um console.log() 
// para acompanhar o seu desenvolvimento pelo terminal do navegador.

// Para checar esse desenvolvimento, você deve executar o nosso projeto no navegador com a ferramenta LiveServer e abrir o terminal. 
// Agora, um elemento div vazio deve ser encontrado onde iremos criar um li para manipulá-lo. 
// Observe as etapas a seguir:

// Segunda etapa

// Agora, com o nosso elemento <li> criado e salvo na variável elementoJavaScript, 
// podemos começar a manipulá-lo.

// Iniciaremos usando a propriedade innerText para adicionar o texto “JavaScript” nele. 
// Veja na imagem como isso pode ser feito.

// Se você observar o terminal no navegador, temos agora um elemento <li> com o texto JavaScript 
// entre as tags de abertura e fechamento:

// Além do innerText, podemos usar outras propriedades para manipular os elementos HTML que criamos.

// Nesse caso, sabemos que os elementos da nossa lista tem um id que os diferencia.

// Dessa forma, podemos adicionar um id ao nosso elemento, usando a propriedade .id do elementoJavaScript, 
// e atribuir a ele um valor. Observe a imagem.
// Ao salvar as mudanças e voltar no terminal do navegador, devemos ver nosso elemento completo, 
// com seu respectivo texto e id:

// Terceira etapa

// Com o elemento criado, populado e manipulado, podemos adicioná-lo ao nosso site.

// Para fazer isso, precisamos capturar o seu elemento pai via DOM e salvá-lo em uma variável.

// Nesse caso, o elemento pai é a lista não ordenada com a classe Lista-linguagens. 
// Sabendo disso, usaremos o método .querySelector para capturá-lo e guardá-lo dentro de uma variável. 
// Veja a imagem.

// Com o elemento da lista não ordenada salvo na variável listaLinguagens, 
// podemos chamar essa variável e usar o método appendChild() para adicionar elementos nele.

// Para fazer isso, basta passar o que deseja como argumento dentro dos parênteses.

// No nosso exemplo, vamos adicionar o elementoJavaScript que criamos e manipulamos nas etapas anteriores. 
// Observe a imagem.

// Salvando as mudanças no arquivo e voltando ao navegador, 
// devemos ver o elemento adicionado na lista do nosso site:

// Para verificar que ele foi criado e alocado corretamente, verifique a aba Elements do DevTools:
// Uma observação importante é que a inserção dinâmica de conteúdos no nosso site, 
// usando JavaScript, não altera o código fonte dos nossos arquivos HTML. 
// Se você verificar o arquivo index.html, verá que ele não foi alterado.

// Adicionando elementos complexos

// O exemplo anterior é especialmente útil quando queremos criar e adicionar elementos simples, 
// ou seja, que não possuem elementos filhos e que têm poucos ou nenhum atributo. 
// Por exemplo, só possuem id, class, type, name etc.

// Porém, às vezes, precisamos criar elementos mais complexos. 
// Para esses casos, o método anterior pode ser muito trabalhoso.

// Em casos mais complexos, adicionaremos uma nova postagem ao elemento <section>.

// Se você conferir o arquivo index.html, verá que cada postagem é um elemento <div>, 
// com um id e dois elementos filhos. Além disso, cada elemento filho tem seu respectivo texto e classe.

// Para não precisar criar três elementos diferentes (div, h2 e p) 
// e manipular cada um deles adicionando textos e classes, 
// criaremos apenas um elemento e usaremos a propriedade innerHTML, 
// seguindo as mesmas três etapas do exemplo anterior.

// Primeira etapa
// Criamos o elemento <div> para a postagem e guardamos ele na variável postagemJavaScript:

// Segunda etapa
// Usamos a propriedade innerHTML para inserir todo o conteúdo HTML das postagens em um template string:

// const postagemJavaScript = document.createElement("div");

// postagemJavaScript.innerHTML =

// `<h2 class="post-titulo">JavaScript</h2>

// <p class="post-texto">

//   JavaScript é uma linguagem de programação

// </p>`

// Lembrando que usar o template string nessa etapa nos permite adicionar qualquer outro conteúdo 
// salvo em uma variável. Para isso, o recurso ${ } é usado.

// Terceira etapa

// Nessa etapa, capturamos o elemento pai da nossa postagem e salvamos ele em uma variável:
// Nele, adicionamos o elemento postagemJavaScript através do método appendChild().

// Após salvar as mudanças, podemos voltar no navegador e ver que nossa postagem 
// foi adicionada no final da section:

// Conclusão

// Os métodos createElement() e appendChild() 
// nos permitem criar elementos HTML no DOM e inseri-los no nosso site de forma dinâmica.

// Usando eles em conjunto com os conceitos aprendidos nas aulas anteriores (innerText, innerHTML e template strings), 
// conseguimos manipular os elementos preexistentes no site e populá-lo com novas informações usando a linguagem JavaScript.

// Isso é muito útil em duas situações: 
// quando queremos popular nosso site com dados vindo de sistemas externos e quando queremos que 
// a interação de nossos usuários altere o conteúdo do site. Veremos como fazer isso nas próximas aulas!