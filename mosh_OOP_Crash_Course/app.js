function StopWatch(){
    let currentDuration = 0;
    let isStarted = false;
    let interval;

    this.start = function(){
        if(isStarted){

            throw new Error('Stop watch is already started');

        }else{
            isStarted = true;
            interval = setInterval(() => {
                currentDuration +=0.1 
             }, 100);
        }

    }

    this.stop = function(){
        if(isStarted){

            clearInterval(interval);

            isStarted = false

        }else{
            throw new Error('Stop watch is already stoped');
        }
    }

    this.reset = function(){

        clearInterval(interval);
        isStarted = false;
        currentDuration = 0;

    }

    this.duration = function(){
        return Number(currentDuration.toFixed(3));
    }

    /*Object.defineProperty(this,'duration',{
        get:function(){return currentDuration}
    });*/
}