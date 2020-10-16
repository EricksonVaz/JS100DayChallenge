(function(){

    let images = ['img/contBcg-0.jpeg','img/contBcg-1.jpeg','img/contBcg-2.jpeg','img/contBcg-3.jpeg','img/contBcg-4.jpeg'];
    const btn = document.querySelectorAll('.btn');
    var slide = document.querySelector('.slide');
    var i = 0;

    btn.forEach(function(el,index){
        if(index==0){
            el.addEventListener('click',function(){
                i--
                i=i<0?(images.length-1):i;
                slide.style.backgroundImage = `url(${images[i]})`;
            })
        }else{
            el.addEventListener('click',function(){
                i++;
                i=i>(images.length-1)?0:i;
                slide.style.backgroundImage = `url(${images[i]})`;
            })
        }
    })
    
})();

