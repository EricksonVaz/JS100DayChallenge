var btn = document.querySelector('.btn');
var body = document.querySelector('body');

var colors = [
    'orchid',
    'blueviolet',
    'royalblue',
    'palevioletred',
    'tomato'
]
btn.addEventListener('click',function(){
    body.style.backgroundColor = colors[parseInt(Math.random() * colors.length)];
});