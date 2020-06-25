'use sctrict'

const RegisterUser = {

    validation: function (form) {
        let i = 0;
        let controller = true
        const formData = new FormData(form)
        formData.forEach((element) => {
            if (element == '') {
                form[i].classList.add('danger-msg')
                controller = false
            } else {
                form[i].classList.remove('danger-msg')
            }
            i++
        })
        return controller
    },

    registerUser: function(URL, form) {
        const formData = new FormData(form)
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

const elForm = document.querySelector('#form-register')
elForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const URL = './src/controller/controller.php'
    if (RegisterUser.validation(elForm)) {
        RegisterUser.registerUser(URL, elForm)
    }
})

