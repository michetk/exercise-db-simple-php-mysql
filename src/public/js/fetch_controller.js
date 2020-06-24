'use sctrict'

const RegisterUser = {
    validation: function (URL, ...args) {
        let aux = 1
        args.forEach(element => {
            if (element.value == '') {
                element.classList.add('msg-changer')
                aux = 0
            }
        })

        if (aux) {
            fetch(URL)
        }
    }
}

const URL = '../../controller/controller.php'
const elName = document.querySelector('#name')
const elEmail = document.querySelector('#email')
const elPassword = document.querySelector('#password')
const elPasswordConfirm = document.querySelector('#password-confirm')

RegisterUser.validation(URL, elName, elEmail, elPassword, elPasswordConfirm)