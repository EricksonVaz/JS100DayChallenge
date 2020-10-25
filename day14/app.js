(function(){
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const alert = document.querySelector('.alert');
    const clearButton = document.querySelector('.container>button');

    var items = document.querySelector('.items');

    var arrayitems = []

    loaditems();

    form.addEventListener('submit',function(e){
        e.preventDefault();

        if(input.value===''){
            alert.classList.add('error');
            setFeedback('error');
        }else{
            arrayitems.push(input.value);
            localStorage.setItem('list',JSON.stringify(arrayitems));
            loaditems();
            alert.classList.add('success');
            setFeedback('success');
            input.value=''
        }

        
    });

    clearButton.addEventListener('click',function(){
        localStorage.clear()
        arrayitems = [];
        loaditems();
    })

    function loaditems(){
        items.innerHTML = 'No items in the list'
        if(localStorage.getItem('list') && eval(localStorage.getItem('list')).length!=0){
            items.innerHTML = '';
            arrayitems = eval(localStorage.getItem('list'));

            arrayitems.forEach((el)=>{
                items.innerHTML +=`
                    <div class="item">
                        <p>${el}</p>
                        <span class="material-icons">
                            delete
                        </span>
                    </div>
                `;
            });

            items.querySelectorAll('.item').forEach((it,index)=>{
                it.querySelector('span').addEventListener('click',function(){
                    var newArray = arrayitems.filter((value,i)=>{
                        return i!=index;
                    });

                    arrayitems = newArray;
                    localStorage.setItem('list',JSON.stringify(arrayitems));
                    loaditems();
                })
            })
        }
    }

    function setFeedback(feedback){
        setTimeout(()=>{
            alert.classList.remove(feedback);
        },3000);
    }
})();