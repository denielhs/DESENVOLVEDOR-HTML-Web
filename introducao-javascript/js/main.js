

// Trabalhando com o JavaScript

var nome = "Daniel Hilário da Silva"; /* Tipagem dinâmica pois não precisei declarar o tipo da variável */
var idade = 40;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
var n1 = 5;
var n2 = 3;

alert("Olá, " + nome + ". Você tem " + idade + " anos");

// Trabalhando com o mensagens no console
console.log(nome);
console.log(idade + idade2);
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());

// Fazendo cálculos no console
console.log(n1*n2);

// Trabalhando com arrays

//Começando com as listas
var lista = ["uva", "pera", "maçã", "laranja"];
lista.push("abacate");
console.log(lista)
console.log(lista.length);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());

// Convertendo a lista em uma string
console.log(lista.toString());
console.log(lista.join(" - "));

// Outra possibilidade é trabalhar com dicionários
var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta)

// Criando uma lista de dicionários
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}, {nome: "Kiwi", cor: "verde"}];
console.log(frutas)

// Condicionais, Laços de repetição e Date.
var idade3 = 18;

if(idade3 >= 18){
    alert("maior de idade")
} else {
    alert("menor de idade")
}

var idade4 = prompt("Qual a sua idade em anos?")
if (idade4 >=18){
    alert("maior de idade")
} else{
    alert("menor de idade")
}

var count = 0;

while(count <5){
    console.log(count);
    count = count + 1; // ou count = count++
}

var count1;
for(count1=0; count1<=5;count1++){
    console.log(count1)
}

var d = new Date();
alert(d);
alert(d.getMonth()+1); // pode-se usar também getDay()

// funcoes
function soma(n1,n2){
    return n1+n2;
}
alert(soma(5,10));



// Exercícios do desafio

let valor1 = parseInt(gets());
count = 0;

while(count <= valor1) {
  if (count % 2 == 0) {
    count = count + 1;
    console.log(count);
  }
}
