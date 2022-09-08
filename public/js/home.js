// criando constantes para login 
const emailEsperado = "mateusgiancott@gmail.com";
const senhaEsperada = "33433334";

// capturar todos os elementos de interesse na página
// 0- o form que contém todos os campos 
const form = document.getElementById("form");

// 1- Input email
//document .querySelector recebe como parâmetro um seletor css 
const inputEmail = document.querySelector("#form input[type=email]");
//2- Input senha
const inputSenha = document.querySelector("#form input[type=password]")
//3- Botão de entrar 
const buttonEntrar = document.querySelector("#form button[type=submit]")


//Associar o evento "perder o foco" com uma função que verifica se o campo foi preenchido"
inputEmail.addEventListener(
   'blur', 
   ()=>{

   }
);
