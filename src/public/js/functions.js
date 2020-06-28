// Mensagem de erro bootStrap
export class Msg {
    
    constructor(msg) {
        this.msg = msg
    }

    dangerMsg = () => {
        return this.msg;
    }

}
