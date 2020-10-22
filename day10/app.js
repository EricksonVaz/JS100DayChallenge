(function(){
    var button = document.querySelectorAll('.button');
    var screen = document.querySelector('.screen');

    button.forEach((el)=>{
        el.addEventListener('click',function(){
            if(this.classList.contains('be')){
                screen.innerHTML = eval(screen.innerHTML);
            }else if(this.classList.contains('bc')){
                screen.innerHTML = '0';
            }else{
                if(screen.innerHTML==0){
                    screen.innerHTML = this.innerHTML;
                    console.log("0")
                }else{
                    screen.innerHTML += this.innerHTML;
                }
               
            }
        });
    });
})();