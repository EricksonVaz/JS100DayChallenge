(function(){
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const alert = document.querySelector('.alert');
    const btnClear = document.querySelector('button[type="button"]');

    var itemList = document.querySelector('.items-list');

    var arrayItems = [];

    loadItems();

    form.addEventListener('submit',function(e){
        
        e.preventDefault();

        var valueInput = input.value;

        if(valueInput===''){

            displayAlert('error');

        }else{

            addNewItem(valueInput)

            displayAlert('success');

        }

        input.value = '';
    });

    btnClear.addEventListener('click',deleteAll);

    function displayAlert(type){

        alert.classList.add(type);

        setTimeout(()=>{
            alert.classList.remove(type);  
        },3000);

    }

    function loadItems(){

        itemList.innerHTML ='No items added...'

        if(localStorage.getItem('list')&&eval(localStorage.getItem('list')).length!=0){

            itemList.innerHTML = '';

            var arraySaved = eval(localStorage.getItem('list'));

            arrayItems = arraySaved;

            arrayItems.forEach((item,index)=>{
                
                itemList.innerHTML +=`
                    <div class="item">
                        <p>${item}</p>
                        <span class="material-icons">
                            delete
                        </span>
                    </div>
                `;

            });

            itemList.querySelectorAll('.item>span').forEach((el,posEl)=>{

                el.addEventListener('click',function(){
                    deleteItem(posEl);
                });

            })
        }
    }

    function deleteItem(index){

        var newArray = arrayItems.filter((item,ind)=>{
            return ind!=index;
        });

        arrayItems= newArray;

        localStorage.setItem('list',JSON.stringify(arrayItems));

        loadItems();
    }
    
    function addNewItem(item){

        arrayItems.push(item);

        localStorage.setItem('list',JSON.stringify(arrayItems));

        loadItems();
    }

    function deleteAll(){

        arrayItems=[];

        localStorage.clear();

        loadItems();
    }

})();