
![Descricao da sua imagem](https://github.com/tgiovanni/alura-midi/blob/master/images/Front-end-JavaScript_Web.png)

![](https://img.shields.io/github/license/alura-cursos/android-com-kotlin-personalizando-ui)

# Javascript para Web: Crie páginas dinamicas 

App de simulação de um e-commerce para produtos naturais para o curso de personalização de UI no Android com Kotlin.

## 🔨 Funcionalidades do projeto
1- Função tocaSom(seletorAudio): Recebe um seletor e tenta encontrar um elemento correspondente no DOM. Se o elemento for um elemento de áudio (<audio>), executa o som desse elemento.

2- Seleção de teclas e atribuição de eventos:
O código seleciona todas as teclas com a classe .tecla.
Originalmente, utiliza um loop while para iterar sobre cada tecla, obtém o tipo de instrumento, cria um identificador de áudio correspondente e atribui um evento de clique a cada tecla para reproduzir o som associado a ela.
Posteriormente, é usado um loop for para fazer o mesmo que o loop while, mas de uma maneira mais direta.


![](img/amostra.gif)

## ✔️ Técnicas e tecnologias utilizadas
JavaScript: Linguagem de programação usada para manipular a lógica e interações do lado do cliente.

HTML e CSS: O código interage com elementos HTML usando seletores de classe CSS para identificar elementos específicos.

Eventos DOM: Manipulação de eventos do Document Object Model (DOM) para interagir com a página HTML.

Iteração de Elementos: Utilização de loops (while e for) para iterar sobre uma lista de elementos e atribuir eventos a eles.

Template String (Template literal): Uso de template strings com ${} para criar identificadores de elementos de áudio.

## 🎯 Desafio
Desafios do código:
Boa prática de programação: O código inicialmente usa um loop while e depois muda para um loop for. Explicar a razão dessa mudança de abordagem pode ser um ponto interessante.

Manipulação de eventos: Mostrar como os eventos de clique (click) e de pressionamento de tecla (keydown e keyup) são utilizados para reproduzir os sons.

Seleção de elementos HTML: Explicar como o código seleciona elementos no DOM usando document.querySelector e document.querySelectorAll com seletores de classe CSS.

[Você pode conferir o resultado do desafio neste commit](https://github.com/tgiovanni/alura-midi).

## 📁 Acesso ao projeto

Você pode [acessar o código fonte do projeto inicial](https://github.com/alura-cursos/aluramidi-curso/archive/refs/heads/arquivos-iniciais.zip) ou [baixá-lo](https://github.com/alura-cursos/aluramidi-curso/archive/refs/heads/arquivos-iniciais.zip).

## 🛠️ Abrir e rodar o projeto

 🏆 Clone esse repositorio e Abra no seu Visual Studio code

## 📚 Mais informações do curso

Gostou do projeto e quer conhecer mais? Você pode [acessar o curso](https://cursos.alura.com.br/course/javascript-web-paginas-dinamicas/) que desenvolve o projeto desde o começo!

