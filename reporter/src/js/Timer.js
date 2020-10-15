export default class Timer
{
    constructor()
    {
    }

    startTimer()
    {
        this.startTime = new Date().getTime();
        return Math.ceil(this.startTime);
    }
    stopTimer()
    {
        this.stopTime = new Date().getTime();
        return Math.ceil(this.stopTime);
    }

    getTimeDifference()
    {
        return Math.ceil((this.stopTime - this.startTime) / 1000);
    }
}