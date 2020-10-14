(function(){
    var form = document.querySelector('form');
    var text = document.querySelector('input');
    var alert = document.querySelector('.alert');
    var message = document.querySelector('.message');

    form.addEventListener('submit',function(e){
        e.preventDefault();
        if(text.value===''){
            alert.classList.add('show');
            setInterval(()=>{
                alert.classList.remove('show');
            },2000);
        }else{
            message.classList.add('show');
            message.innerHTML = text.value;
            text.value='';
        }
    });

})();