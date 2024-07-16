// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function clicarNoConsole(){
    console.log("O botão foi clicado");
}

function clicarNoAlert(){
    alert("Eu amo JS");
}