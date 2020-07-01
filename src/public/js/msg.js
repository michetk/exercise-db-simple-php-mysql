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