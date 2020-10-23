(function(){

    var items = document.querySelector('.items');
    var btnAdd = document.querySelector('.btn-add');
    var btnClear = document.querySelector('.btn-clear');
    var input = document.querySelector('input');

    var atualList = eval(`[${localStorage.getItem('todo')}]`);

    var to_do_array = (atualList[0]==null?[]:atualList);

    input.value = '';
    loadNewList(to_do_array);

    btnAdd.addEventListener('click',submitInput);

    input.addEventListener('keydown',function(e){
        if(e.code == 'Enter'){
            submitInput()
        }
    })

    btnClear.addEventListener('click',function(){
        localStorage.clear();
        to_do_array = [];
        loadNewList(to_do_array);
    });

    function submitInput(){
        if(input.value!==''){
            if(input.dataset.action != ''){
                saveEdit(input.dataset.action,input.value);
            }else{
                addNewStask(input.value);
            }
            input.value='';
        }else{
            swal("Please enter a valid task");
        }
    }

    function addNewStask(taskName){
        to_do_array.push({task:taskName,status:'t'});

        newArray = to_do_array.map(item=>{
            return JSON.stringify(item);
        });

        localStorage.setItem('todo',newArray);

        var list = eval(`[${localStorage.getItem('todo')}]`);

        loadNewList(list);   
    }

    function loadNewList(list){
        if(list.length==0){
            items.innerHTML = 'Nothing to do ...';
        }else{
            items.innerHTML = '';
            list.forEach((element,index) => {
                var p = (element.status == 'c'?`<p><del>${element.task}</del></p>`:`<p>${element.task}</p>`);
                var domElement = 
                    `<div class="item" data-id="${index}">
                        ${p}
                        <span class="check ${element.status} material-icons">
                            check_circle_outline
                        </span>
                        <span class="edit material-icons">
                            edit_road
                        </span>
                        <span class="delete material-icons">
                            delete_outline
                        </span>
                    </div>`
                ;
                items.insertAdjacentHTML('beforeend',domElement);
            });

            items.querySelectorAll('.item').forEach((el)=>{
                el.querySelector('.check').addEventListener('click',actionComplete);
                el.querySelector('.edit').addEventListener('click',actionEdit);
                el.querySelector('.delete').addEventListener('click',actionDelete);
            })
        }
    }

    function actionComplete(){
        
        var list = eval(`[${localStorage.getItem('todo')}]`);

        var newArray = list.map((item,index)=>{
            if(index==this.parentElement.dataset.id){
                item.status = (item.status == 'c'?'t':'c'); 
            }
            return JSON.stringify(item);
        });

        localStorage.setItem('todo',newArray);

        list = eval(`[${localStorage.getItem('todo')}]`);

        to_do_array = list;

        loadNewList(to_do_array);

    }

    function saveEdit(indexValue,newName){
        var list = eval(`[${localStorage.getItem('todo')}]`);

        var newArray = list.map((item,index)=>{
            if(index==indexValue){
                item.status = 't';
                item.task = newName;
            }
            return JSON.stringify(item);
        });

        localStorage.setItem('todo',newArray);

        list = eval(`[${localStorage.getItem('todo')}]`);

        to_do_array = list;

        loadNewList(to_do_array);
    }

    function actionEdit(){
        input.value = this.parentElement.firstElementChild.innerHTML;

        input.dataset.action = this.parentElement.dataset.id;
        this.parentElement.style.display = 'none';
    }

    function actionDelete(){
        var list = eval(`[${localStorage.getItem('todo')}]`);

        var newArray = list.filter((item,index)=>{
            return index!=this.parentElement.dataset.id
        }).map((item)=>{
            return JSON.stringify(item);
        });
        
        localStorage.setItem('todo',newArray);

        list = eval(`[${localStorage.getItem('todo')}]`);

        to_do_array = list;

        loadNewList(to_do_array);
    }

})();