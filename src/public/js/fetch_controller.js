'use strict'

import { Msg } from './functions.js'


// Ouvinte do submit do elForm
const elForm = document.querySelector('#form-register')
elForm.addEventListener('submit', async (e) => {
    
    e.preventDefault()
    const URL = '/src/controller/controller.php'
    debugger
    const validationForm = new ValidationForm('#form-register', '#password', '#password-confirm' ,'#danger-msg', 'As Senhas não Batem')
    const validation = validationForm.validation()
    
    if (validation) {
        const registerUser = new RegisterUser(URL, '#form-register')
        await registerUser.registerUser()
        const status = registerUser.getStatus()
        if (status === 200) {
            const msg = new Msg('Danger Msg')
            console.log('result: ' + msg.dangerMsg())
        }
    }
})


// Validação de elForm
class ValidationForm {

    constructor(idForm, idPassword, idPasswordConfirm, idElementDangerMsg, msgSenhasDiferentes) {
        this.idForm = idForm
        this.idPassword = idPassword
        this.idPasswordConfirm = idPasswordConfirm
        this.idElementDangerMsg = idElementDangerMsg
        this.msgSenhasDiferentes = msgSenhasDiferentes
    }

    validation = () => {
        const elForm = document.querySelector(this.idForm)
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

        if (!controller) {
            return controller
        }

        const elPassword = document.querySelector(this.idPassword)
        const elPasswordConfirm = document.querySelector(this.idPasswordConfirm) 
        
        if (elPassword.value !== elPasswordConfirm.value) {

            const elP = document.querySelector(this.idElementDangerMsg)
            const elTextNode = document.createTextNode(this.msgSenhasDiferentes)
            elP.setAttribute('class', 'danger-msg')
            elP.appendChild(elTextNode)

            elPassword.classList.add('danger-msg-border')
            elPasswordConfirm.classList.add('danger-msg-border')

            controller = false
        }

        return controller
    }

}



// Fazer o request para o db
class RegisterUser {

    constructor(URL, idForm) {
        this.URL = URL
        this.idForm = idForm
        this.status = 503
    }
    

    getStatus = () => {
        return parseInt(this.status)
    }
    
    registerUser = async () => {
        
        const elForm = document.querySelector(this.idForm)
        const formData = new FormData(elForm)

        
        const res = await fetch(this.URL, {
            method: 'POST',
            body: formData
        })
        const value = await res.text()
        this.status = value

    }

}


