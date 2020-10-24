(function(){
    const btnShowCart = document.querySelector('.option-2');
    const myCart = document.querySelector('.my-cart');
    const btnAddToCart = document.querySelectorAll('.cart');
    const btnClearCart = document.querySelector('.action-card button:first-of-type');
    const btnCheckout = document.querySelector('.action-card button:last-of-type');
    var itemInCard = document.querySelector('.item-group');
    var totalLabel = document.querySelector('.total-label');
    var totalitem = document.querySelector('.num-item');
    var totalAmountInCart = document.querySelector('.total');

    checkoutArray = [];

    loadCard(checkoutArray);

    btnShowCart.addEventListener('click',function(){
        myCart.classList.toggle('cart-show');
    });

    btnAddToCart.forEach(el=>{
        el.addEventListener('click',addInCard);
    });

    btnClearCart.addEventListener('click',function(){
        loadCard([]);
    });

    btnCheckout.addEventListener('click',function(){
        if(parseInt(totalitem.innerText)!=0){
            swal("Success!", "Purchase successful!", "success");
            loadCard([]);
        }else{
            swal("First add an item to the cart"); 
        }
        
    })
    
    function addInCard(){
        var domElment = this.parentElement.parentElement;
        var img = domElment.querySelector('img').src;
        var name = domElment.querySelector('p.name').innerText;
        var amount = domElment.querySelector('p.price').innerText;

        checkoutArray.push(new CardItem(img,name,amount));

        loadCard(checkoutArray);

        swal("New product added to cart");

        //console.log(checkoutArray);
    }

    function CardItem(img,name,amount){

        this.index = checkoutArray.length;
        this.img = img;
        this.name = name;
        this.amount = amount;

        this.delete = function action(){
            var newArray = checkoutArray.filter((item)=>{
                return item.index!=this.index;
            });
            loadCard(newArray);
        }

    }

    function loadCard(arrayitem){
        checkoutArray = arrayitem;
        itemInCard.innerHTML = '';
        totalLabel.innerHTML = '';
        totalitem.innerHTML = arrayitem.length+' item';
        totalAmountInCart.innerHTML = '$0.0';
        var total = 0;
        if(arrayitem.length==0){
            itemInCard.innerHTML = 'No items in cart...'
            totalLabel.innerHTML = '$0.0';
        }else{
            arrayitem.forEach((element,index) => {
                total += eval(element.amount.split("$")[1]);
                itemInCard.innerHTML += `
                    <div class="item">
                        <img src="${element.img}">
                        <div class="desc">
                            <p class="name"><b>${element.name}</b></p>
                            <small>${element.amount}</small>
                        </div>
                        <span class="material-icons del-cart" onclick="${element.delete}">
                            delete
                        </span>
                    </div>
                `;
                totalAmountInCart.innerHTML = totalLabel.innerHTML = '$'+total;
            });
            itemInCard.querySelectorAll('.del-cart').forEach((el,index)=>{
                el.addEventListener('click',function(){
                    checkoutArray[index].delete();
                });
            });
        }
    }
})();