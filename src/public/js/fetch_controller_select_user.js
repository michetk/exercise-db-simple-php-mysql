import { Msg } from '/src/public/js/msg.js'


const elBtnList = document.querySelector('#btn-list')
elBtnList.addEventListener('click', (e) => {
    e.preventDefault()
    const url = '/src/controller/controller_query_user.php'
    const selectUser = new SelectUser(url)
    selectUser.queryUser()
})



class SelectUser {

    constructor(url) {
        this.url = url;
    }

    queryUser = () => {
        fetch(this.url)
            .then(res => res.json())
            .then(value => {
                
                if (value !== '503') {
                    const elBodyTable = document.querySelector('#body-table')
                    const tr = document.createElement('tr')
                    const arr = new Array()

                    for (const key in value) {
                        if (value.hasOwnProperty(key)) {
                            const element = value[key];
                            arr.push(element)
                        }
                    }

                    arr.forEach((value) => {
                        const td = document.createElement('td')
                        const textNode = document.createTextNode(value)
                        td.setAttribute('scope', 'row')
                        td.appendChild(textNode)
                        tr.appendChild(td)
                    })

                    elBodyTable.appendChild(tr)

                } else {
                    const msg = new Msg('#alert', '#msg', 'Ops!', ' Não temos Usuários no Banco de Dados', 'alert-primary')
                    msg.createMsg()
                }

            })
    }
}