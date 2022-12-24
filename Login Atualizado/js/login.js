/*Variaveis*/
let btn = document.querySelector('.fa-eye')

let usuario = document.querySelector('#usuario')
let labelusuario = document.querySelector('#labelUsuario')


let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')

let listaUser = []

let userValid={
    nome: '',
    user: '', 
    senha: ''
}

let mathRandom = Math.random().toString(16).substring(2)

let token = mathRandom + mathRandom

/*Visualizar senha*/

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

        if (inputSenha.getAttribute('type') == 'password') {
            inputSenha.setAttribute('type', 'text')
        } else{
            inputSenha.setAttribute('type', 'password')
        }
})

/*Botão enter para fazer a função cadastrar*/
    document.addEventListener("keypress", function(e){
        if (e.key === "Enter") {
            const btno = document.querySelector(".btn-login")

                btno.click(entrar);
        }


    })


/*Logar o usuárior*/
    function entrar(){

        listaUser = JSON.parse(localStorage.getItem('listaUser'))

        listaUser.forEach((element) => {
            if (usuario.value == element.userCadastro && senha.value == element.senhaCadastro) {
                userValid = {
                    nome: element.nomeCadastro,
                    user: element.userCadastro,
                    senha: element.senhaCadastro

                }
            }
        });


        if (usuario.value == userValid.user && senha.value == userValid.senha && usuario.value !='') {
            labelusuario.setAttribute('style' , 'color: green')
            labelusuario.innerHTML = '<strong>Usuário*</strong>'

            labelSenha.setAttribute('style' , 'color: green')
            labelSenha.innerHTML = '<strong>Senha*</strong>'

                Swal.fire(
                    "Olá",
                    "Seja bem vindo",
                    "success",

                )
                    setTimeout(()=>{
                        window.location.href = './pos_login.html'

                    }, 3000)

                        localStorage.setItem('token', token)

                        localStorage.setItem('userLogado', JSON.stringify(userValid))
            
        } else{
            labelusuario.setAttribute('style' , 'color: red')
            labelusuario.innerHTML = '<strong>Usuário*</strong>'

            labelSenha.setAttribute('style' , 'color: red')
            labelSenha.innerHTML = '<strong>Senha*</strong>'
            
                usuario.focus()
                    Swal.fire(
                        "Olá",
                        "Usuário ou senha inválidos",
                        "warning",

                )
        }
        
    }