(function(){
    const largePointer = document.querySelector('.large');
    const mediumPointer = document.querySelector('.medium');
    const shortPointer = document.querySelector('.short');

    const p = document.querySelector('p');

    
    

    currentTime()

    function currentTime(){

        let date1 = new Date();
        var curenteHours ;
        if(date1.getMinutes()<=45){
            curenteHours = (-90 + (date1.getHours()*30));
        }else{
            curenteHours = (-90 + (date1.getHours()*32));
        }

        
        var curenteMinute = (-90 + (date1.getMinutes()*6));
        var curenteSecond = (-90 + (date1.getSeconds()*6));

        largePointer.style.transform = `rotate(${curenteHours}deg)`;
        mediumPointer.style.transform = `rotate(${curenteMinute}deg)`;
        shortPointer.style.transform = `rotate(${curenteSecond}deg)`;
    }
    
    setInterval(()=>{

        currentTime();

    },1000)
    
})();