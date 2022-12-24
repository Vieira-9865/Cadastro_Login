if(localStorage.getItem('token') == null) {
    Swal.fire(
        "Ops",
        "Login expirado",
        "warning",

   )
   setTimeout(()=>{
    window.location.href = './login.html'

}, 2000)
}

let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = 'Olá ' + userLogado.nome

function sair() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = './login.html'
}