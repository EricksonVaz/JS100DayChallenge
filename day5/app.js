(function(){
    const btnLower = document.querySelector('button:first-of-type');
    const btnAdd = document.querySelector('button:last-of-type');
    let count = document.querySelector('.count');

    btnLower.addEventListener('click',function(){
        let atualCont = parseInt(count.innerText);

        atualCont--

        count.innerText = atualCont;

        if(atualCont==0){
            count.classList.remove('green');
        }else if(atualCont < 0){
            count.classList.add('red');
        }
    });

    btnAdd.addEventListener('click',function(){
        let atualCont = parseInt(count.innerText);

        atualCont++

        count.innerText = atualCont;

        if(atualCont==0){
            count.classList.remove('red');
        }else if(atualCont > 0){
            count.classList.add('green');
        }
    });
})();