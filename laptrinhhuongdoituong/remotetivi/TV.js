class Television{
    constructor(status,channel,volume){
        this.status = status;
        this.channel = channel;
        this.volume = volume;
    }
    changeChannel(channel){
        this.channel = channel;
    }
    changeVolume(volume) {
        this.volume = volume;
    }
    checkStatus(){
        if(this.status === 'ON'){
            return true;
        }else {
            return false;
        }
    }
}