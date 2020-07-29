'use strict'
import { Msg, MsgOfForm } from '/src/public/js/msg.js'

// Ouvinte do submit do elForm
const elForm = document.querySelector('#form-register')
elForm.addEventListener('submit', async (e) => {

    e.preventDefault()
    const URL = '/src/controller/controller.php'
    const validationForm = new ValidationForm('#form-register', '#password', '#password-confirm')
    const validation = validationForm.validation()

    if (validation) {
        const registerUser = new RegisterUser(URL, '#form-register')
        await registerUser.registerUser()
        const status = registerUser.getStatus()

        if (status === 200) {
            const msg = new Msg('#alert', '#msg', 'Tudo Certo!', ' Usuário Cadastrado com Sucesso', 'alert-success')
            msg.createMsg()
            validationForm.cleanDatas()

        } else {

            const msg = new Msg('#alert', '#msg', 'Houve um Erro!', ' Usuário NÃO foi Cadastrado.', 'alert-success')
            msg.createMsg()

        }
    }
})


// Validação de elForm
class ValidationForm {

    constructor(idForm, idPassword = '1', idPasswordConfirm = '1', idStyleDanger = 'danger-msg-border', idElementDangerMsg = '#danger-msg', msgSenhasDiferentes = 'As Senhas não Batem') {
        this.idForm = idForm
        this.idPassword = idPassword
        this.idPasswordConfirm = idPasswordConfirm
        this.idStyleDanger = idStyleDanger
        this.idElementDangerMsg = idElementDangerMsg
        this.msgSenhasDiferentes = msgSenhasDiferentes
    }

    validation = () => {

        let controller
        const msgOfForm = new MsgOfForm()
        controller = msgOfForm.styleDanger(this.idForm)

        if (!controller) {
            return controller
        }


        // Verifica se senhas são iguais
        const elPassword = document.querySelector(this.idPassword)
        const elPasswordConfirm = document.querySelector(this.idPasswordConfirm)

        if (elPassword.value.length < 4) {
            
            const msgOfForm = new MsgOfForm('A Senha deve ser no Mínimo 4 Dígitos.', '#danger-msg', [elPassword, elPasswordConfirm])
            msgOfForm.msgDanger()
            controller = false
            
        } else if (elPassword.value !== elPasswordConfirm.value) {

            const msgOfForm = new MsgOfForm('As Senhas não Batem.', '#danger-msg', [elPassword, elPasswordConfirm])
            msgOfForm.msgDanger()
            controller = false

        }

        return controller
    }

    cleanDatas = () => {
        const elForm = document.querySelector(this.idForm)
        debugger
        for (let i = 0; i < elForm.length; i++) {
            elForm[i].value = ''
        }
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


