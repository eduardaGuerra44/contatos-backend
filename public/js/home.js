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



// informações sobre o evento 
const imprimeEvento = (evento) => {
   console.log(evento.target)
   console.log(evento.type)
}


//Associar o evento "perder o foco" com uma função que verifica se o campo foi preenchido"
inputEmail.addEventListener('blur', imprimeEvento);
inputSenha.addEventListener('blur', imprimeEvento);

form.addEventListener(
   'submit', 
   (evento) => {
      // inibir o envio do formulário
      evento.preventDefault();

      //verificar se o email digitado é igual ao emailEsperado
      if(inputEmail.value != emailEsperado){
         alert("Falha no login");
         return;
      }

      //verificar se a senha digitada é igual ao senhaEsperada

      //se estiver tudo ok, emitir mensagem de sucesso
      alert("login deu certo"); 
   }
)