(function(){
 var filterByCat = document.querySelectorAll('a[data-type]');
 var items = document.querySelectorAll('.container > .item');
 var searchInput = document.querySelector('#search');
 var form = document.querySelector('form');

 var overlay = document.querySelector('.overlay');
 var modal = document.querySelector('.modal');
 var closeModal = document.querySelector('.close');
 var modalButtons = document.querySelectorAll('.modal-control');

 items.forEach((el,index)=>{
     el.addEventListener('click',function(e){
         if(!e.target.classList.contains('cart')){
            modal.querySelector('img').src = el.querySelector('img').src;
            modalNavigation(index)
            overlay.classList.add('show-overlay');
            modal.classList.add('show-modal');
         }
     })
 });

 function modalNavigation(index){
    modalButtons.forEach((el)=>{
        el.addEventListener('click',function(){
            if(el.classList.contains('prev')){
                index--;
                index = (index < 0?0:index);
            }else{
                index++;
                index = (index >= items.length?items.length-1:index);
            }
            modal.querySelector('img').src = items[index].querySelector('img').src;
        });
    })
 }

 overlay.addEventListener('click', modalClose);
 closeModal.addEventListener('click',modalClose)

 filterByCat.forEach((el)=>{
     el.addEventListener('click',function(){

        removeHidenClass();

        if(this.dataset.type!=='all'){
            items.forEach((item)=>{
                console.log(item.dataset.typeFilter !== this.dataset.type);
                if(item.dataset.typeFilter !== this.dataset.type){
                    item.classList.add('hidden');
                }
            })
        }
        
     })
 });

 searchInput.addEventListener('keyup',function(){
    search();
 });

 form.addEventListener('submit',function(e){
     e.preventDefault();
     search();
 })

 function search(){
    var valueSearch = searchInput.value.toLowerCase();
    removeHidenClass();
    items.forEach((el)=>{
        var name = (el.querySelector('p.name').innerText).toLowerCase();
        if(valueSearch ===''){
            return;
        }else{
           if(!name.includes(valueSearch)){
               el.classList.add('hidden');   
           } 
        }
    });
 }


 function removeHidenClass(){
    items.forEach((el)=>{
        el.classList.remove('hidden');
    })
 }

 function modalClose(){
    overlay.classList.remove('show-overlay');
    modal.classList.remove('show-modal');
 }
})();