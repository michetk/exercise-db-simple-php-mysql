'use strict'


// Validação de elForm
const ValidationForm = {

    // Valida os dados
    validation: function (idForm, idPassword, idPasswordConfirm, idElementDangerMsg, msgSenhasDiferentes) {
        const elForm = document.querySelector(idForm)
        let i = 0;
        let controller = true
        const formData = new FormData(elForm)
        
        formData.forEach((element) => {
            if (element == '') {
                elForm[i].classList.add('danger-msg-border')
                controller = false
            } else {
                elForm[i].classList.remove('danger-msg-border')
            }
            i++
        })

        // Verifica se senhas são iguais
        const password = formData.get('password')
        const passwordConfirm = formData.get('password-confirm')
        
        if (password !== passwordConfirm) {
            const elPassword = document.querySelector(idPassword)
            const elPasswordConfirm = document.querySelector(idPasswordConfirm) 
            
            const elP = document.querySelector(idElementDangerMsg)
            const elTextNode = document.createTextNode(msgSenhasDiferentes)
            elP.setAttribute('class', 'danger-msg')
            elP.appendChild(elTextNode)

            elPassword.classList.add('danger-msg-border')
            elPasswordConfirm.classList.add('danger-msg-border')
        }

        return controller
    }

}



// Fazer o request para o db
const RegisterUser = {

    // Faz o request pra o db
    registerUser: function(URL, idForm) {
        const elForm = document.querySelector(idForm)
        const formData = new FormData(elForm)
        fetch(URL, {
            method: 'POST',
            body: formData
        })
        .then(res => {
            res.text()
            .then(value => {
                console.log(value)
            })
        })
    }
}



// Ouvinte do submit do elForm
const elForm = document.querySelector('#form-register')
elForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const URL = './src/controller/controller.php'
    const validationForm = ValidationForm.validation('#form-register', '#password', '#password-confirm' ,'#danger-msg', 'As Senhas não Batem')
    if (validationForm) {
        RegisterUser.registerUser(URL, '#form-register')
    }
})

