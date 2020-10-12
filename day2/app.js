const btn = document.querySelector('.btn');
const label = document.querySelector('.label');
const body = document.querySelector('body');

var options = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener('click',function(){
    var backgroundValue = '#';

    while(backgroundValue.length<7){
        backgroundValue+=options[parseInt(Math.random()*options.length)];
    }

    body.style.backgroundColor = backgroundValue;
    label.innerText = backgroundValue;

})