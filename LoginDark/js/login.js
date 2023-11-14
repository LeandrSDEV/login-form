function enviar() {

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario == 'admin' && senha == 'admin') {
        alert('Sucesso!');
        location.href = "home.html";
    } else {
        alert('[Error] Login ou senha incorretos!')
    }
}

