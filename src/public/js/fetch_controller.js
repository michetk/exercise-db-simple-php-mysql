'use sctrict'

const RegisterUser = {
    
    validation: function (form) {
        let cont = 0;
        const formData = new FormData(form)
        formData.forEach((element) => {
            if (element == '') {
                form[cont].classList.add('danger-msg')
                cont++
            }
        })
        return cont
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
    if (!RegisterUser.validation(elForm)) {
        RegisterUser.registerUser(URL, elForm)
    }
})

