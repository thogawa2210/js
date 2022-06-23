class Remote {
    constructor(code) {
        this.code = code;
    }

    changeChannel(Television, channel) {
        if (Television.checkStatus()) {
            Television.changeChannel(channel);
        } else {
            alert("Please turn on Television!");
        }
    }
    changeVolume(Television, volume) {
        if (Television.checkStatus()) {
            Television.changeVolume(volume);
        } else {
            alert("Please turn on Television!");
        }
    }
        changeStatus(Television){
            if (Television.status === 'ON') {
                Television.status = 'OFF';
            } else {
                Television.status = 'ON';
            }
        }
}