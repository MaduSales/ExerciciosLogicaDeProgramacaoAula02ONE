// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function clicarNoConsole(){
    console.log("O botão foi clicado");
}

function clicarNoAlert(){
    alert("Eu amo JS");
}

function clicarNoPrompt(){
    let cidade = prompt("Digite o nome de uma cidade do Brasil");
    alert(`Estive em ${cidade} e lembrei de você`);
}

function clicarParaSomar(){
    let numero01 = parseInt(prompt("Digite um número"));
    let numero02 = parseInt(prompt("Digite um segundo número"));
    let resultado = numero01 + numero02;
    alert(`A soma de ${numero01} e ${numero02} é ${resultado}`);
}