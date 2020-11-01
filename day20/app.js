(function(){
    const btn = document.querySelector('button');
    let img = document.querySelector('img');
    let name = document.querySelector('.name');
    let lastName = document.querySelector('.last');
    let location = document.querySelector('.location');
    let phone = document.querySelector('.phone');
    let email = document.querySelector('.email');

    const loadImage = document.querySelector('.lds-default');
    const loadP = document.querySelectorAll('.lds-ellipsis');
    const infosP = document.querySelectorAll('.info p');

    load()

    function load(){
        img.classList.add('hidde');
        loadImage.classList.remove('hidde');
        loadP.forEach((el)=>{
            el.classList.remove('hidde');
        });
        infosP.forEach((el)=>{
            el.classList.add('hidde');
        });
        // Make a request for a user with a given ID
        axios.get('https://randomuser.me/api/')
        .then(function (response) {
            // handle success
            //p.innerHTML=response.data.value;
            let values = response.data.results[0];
            img.src = values.picture.large;

            img.addEventListener("load", event => {
                var isLoaded = img.complete && img.naturalHeight !== 0;

               if(isLoaded){

                img.classList.remove('hidde');
                loadImage.classList.add('hidde');
                name.innerText = values.name.first;
                lastName.innerText = values.name.last;
                location.innerText = values.location.country+"-"+values.location.state;
                phone.innerText = values.phone;
                email.innerText = values.email;

                loadP.forEach((el)=>{
                    el.classList.add('hidde');
                });
                infosP.forEach((el)=>{
                    el.classList.remove('hidde');
                });

               }
            });
            
            console.log(response)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }

    btn.addEventListener('click',function(){
        load();
    })
})();