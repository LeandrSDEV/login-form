const form = document.querySelector('#form')
const nameImput = document.querySelector ('#name')
const emailInput = document.querySelector ('#email')
const passwordInput = document.querySelector ('#password')
const jobSelect = document.querySelector('#job')
const messageTextarea = document. querySelector ('#message')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(nameImput.value === ""){
        alert("Por favor, preencha o seu nome");
        return;
    }
    // Verificar se o e-mail está preenchido e se é valido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email");
        return;
    }

    // Verifica se a está preenchida
    if(!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ser no mínimo 8 dígitos.")
    }

// Verificar se a situação foi selecionada
if(jobSelect.value === "") {
    alert("Por favor, selecione a sua situação");
        return;
}

//Verifica se a mensagem está preenchida

if(messageTextarea.value === "")
alert("Por favor, prencha ou escreva uma mensagem");
        return;

    form.submit();
});
//função que valida e-mail
function isEmailValid(email) {
    //criar um aregex para validar email
    const emailRegex = new RegExp(
        // usuario12@host.com.br
        /^[a-zA-A0-9._-]+@[a-zA-A0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    } 
        
    return false; 
}
//função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        //senha válida
        return true;
    }
    //senha inválida
    return false;
}