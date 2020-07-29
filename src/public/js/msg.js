export class Msg {
    constructor(idAlert, idMsg, msgStrong, msg, typeAlert) {
        this.idAlert = idAlert
        this.idMsg = idMsg
        this.msgStrong = msgStrong
        this.msg = msg
        this.typeAlert = typeAlert
    }

    createMsg = () => {
        const elAlert = document.querySelector(this.idAlert)
        const elMsg = document.querySelector(this.idMsg)
        const strong = document.createElement('strong')
        const strongTextNode = document.createTextNode(this.msgStrong)
        const textNode = document.createTextNode(this.msg)

        elAlert.classList.add(this.typeAlert)
        elAlert.classList.remove('d-none')
        strong.appendChild(strongTextNode)
        elMsg.appendChild(strong)
        elMsg.appendChild(textNode)

        setTimeout(() => {
            elAlert.classList.add('d-none')
        }, 10000)
    }


}

export class MsgOfForm {
    constructor(msg, idElement = '#danger-msg', placeStyle = [], msgClassStyle = 'danger-msg', classStyle = 'danger-msg-border') {
        this.msg = msg
        this.idElement = idElement
        this.placeStyle = placeStyle
        this.msgClassStyle = msgClassStyle
        this.classStyle = classStyle
    }


    msgDanger = () => {
        const elP = document.querySelector(this.idElement)
        const elTextNode = document.createTextNode(this.msg)
        elP.setAttribute('class', this.msgClassStyle)
        elP.appendChild(elTextNode)

        for (let i = 0; i < this.placeStyle.length; i++) {
            this.placeStyle[i].classList.add(this.classStyle)
        }
    }

    styleDanger = (idForm) => {
        const elForm = document.querySelector(idForm)
        let controller = true
        let i = 0;
        const formData = new FormData(elForm)

        formData.forEach((element) => {
            if (element == '') {
                elForm[i].classList.add(this.classStyle)
                controller = false
            } else {
                elForm[i].classList.remove(this.classStyle)
            }
            i++
        })

        return controller
    }
}