export default class Timer
{
    constructor()
    {
    }

    startTimer()
    {
        this.startTime = new Date().getTime();
        return this.startTime;
    }
    stopTimer()
    {
        this.stopTime = new Date().getTime();
        return this.stopTime;
    }

    getTimeDifference()
    {
        return (this.stopTime - this.startTime) / 1000;
    }
}