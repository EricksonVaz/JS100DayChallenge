(function(){
    const button = document.querySelector('button');
    const p = document.querySelector('p');

    button.addEventListener('click',function(){
        // Make a request for a user with a given ID
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(function (response) {
            // handle success
            p.innerHTML=response.data.value;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    });
})();