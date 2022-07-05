class StopWatch{
    constructor(startTime, endTime){
        this.startTime = startTime;
        this.endTime = endTime;
    }
    getStartTime(){
        this.startTime = new Date();
        return this.startTime;
    }
    start(){
        this.startTime = new Date();
    }
    stop(){
        this.endTime = new Date();
    }
    getElapsedTime(){
        return this.endTime - this.startTime;
    }
}