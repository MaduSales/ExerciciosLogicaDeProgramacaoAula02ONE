// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

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