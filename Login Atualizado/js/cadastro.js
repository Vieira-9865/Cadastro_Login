/*Variaveis*/
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelnome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelusuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false


let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false



/*Campos*/

    nome.addEventListener('keyup', ()=>{
        if (nome.value.length <= 2) {
            labelnome.setAttribute('style', 'color : red')
            labelnome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
            nome.setAttribute('style', 'border-color: red')
            validNome = false
        } else{
            labelnome.setAttribute('style', 'color : green')
            labelnome.innerHTML = 'Nome'
            nome.setAttribute('style', 'border-color: green')
            validNome = true
        }
    })

    usuario.addEventListener('keyup', ()=>{
        if (usuario.value.length <= 2) {
            labelusuario.setAttribute('style', 'color : red')
            labelnome.innerHTML = 'Usuario *Insira no minimo 3 caracteres'
            usuario.setAttribute('style', 'border-color: red')
            validUsuario = false
        } else{
            labelusuario.setAttribute('style', 'color : green')
            labelnome.innerHTML = 'Usuario'
            usuario.setAttribute('style', 'border-color: green')
            validUsuario = true

        }
    })

    senha.addEventListener('keyup', () => {
        if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
        
        }
        else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
        
        }
    })

    confirmSenha.addEventListener('keyup', () => {
        if(senha.value == confirmSenha.value){
        
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color: green')
        validConfirmSenha = true
        
        } else{
            labelConfirmSenha.setAttribute('style', 'color: #272262')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color: #272262')
        validConfirmSenha = false
        }
    })

    /*Visualizar senha*/
    btn.addEventListener('click', ()=>{
        let inputSenha = document.querySelector('#senha')

            if (inputSenha.getAttribute('type') == 'password') {
                inputSenha.setAttribute('type', 'text')
            } else{
                inputSenha.setAttribute('type', 'password')
            }
    })

    btnConfirm.addEventListener('click', ()=>{
        let inputSenha = document.querySelector('#confirmSenha')

            if (inputSenha.getAttribute('type') == 'password') {
                    inputSenha.setAttribute('type', 'text')
            } else{
                    inputSenha.setAttribute('type', 'password')
            }
    })

    /*Botão enter para fazer a função cadastrar*/
    document.addEventListener("keypress", function(e){
        if (e.key === "Enter") {
            const btn = document.querySelector("#botao")
    
            btn.click(cadastrar);
        }
    
    
    })

    
    /*Cadastrar Usuário*/

    function cadastrar() {
        if (validNome && validUsuario && validSenha && validConfirmSenha) {

            let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

            listaUser.push({

                nomeCadastro: nome.value,
                userCadastro: usuario.value,
                senhaCadastro : senha.value

            })

            localStorage.setItem('listaUser', JSON.stringify(listaUser))

                labelnome.setAttribute('style' , 'color: green')
                labelnome.innerHTML = '<strong>Usuário*</strong>'

                labelusuario.setAttribute('style' , 'color: green')
                labelusuario.innerHTML = '<strong>Usuário*</strong>'

                labelSenha.setAttribute('style' , 'color: green')
                labelSenha.innerHTML = '<strong>Senha*</strong>'

                labelConfirmSenha.setAttribute('style' , 'color: green')
                labelConfirmSenha.innerHTML = '<strong>Confirmar Senha*</strong>'

                Swal.fire(
                    "Olá",
                    "Usuário Cadastrado com sucesso!",
                    "success",
       
               )


            setTimeout(()=>{
                window.location.href = './login.html'

            }, 3000)
            
        } else{
                labelnome.setAttribute('style' , 'color: red')
                labelnome.innerHTML = '<strong>Usuário*</strong>'

                labelusuario.setAttribute('style' , 'color: red')
                labelusuario.innerHTML = '<strong>Usuário*</strong>'

                labelSenha.setAttribute('style' , 'color: red')
                labelSenha.innerHTML = '<strong>Senha*</strong>'

                labelConfirmSenha.setAttribute('style' , 'color:red')
                labelConfirmSenha.innerHTML = '<strong>Confirmar Senha*</strong>'

                Swal.fire(
                    "Ops",
                    "Preencha todos os campos corretamente",
                    "warning",
        
               )
        }
    }

        
   