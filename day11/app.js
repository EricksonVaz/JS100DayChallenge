(function(){

    const form = document.querySelector('form');
    const select = document.querySelector('#select-service');
    const bill = document.querySelector('#bill');
    const split = document.querySelector('#split');
    const error = document.querySelector('.error-display');
    const load = document.querySelector('.lds-ellipsis');
    const result = document.querySelector('.result');

    form.addEventListener('submit',function(e){
        e.preventDefault();

        var billVal = parseFloat(bill.value);
        var splitVal = parseFloat(split.value);
        var selectVal = parseFloat(select.options[select.options.selectedIndex].value);

        if(validInput(billVal,splitVal,selectVal)){

            error.classList.remove('display');
            load.classList.add('display');

            setTimeout(function(){

                var totalTip = (billVal * selectVal).toFixed(2);
                var totalAmount = billVal + parseFloat(totalTip);
                var quantSplit = (totalAmount / splitVal).toFixed(2);

                setResult(totalTip,totalAmount,quantSplit);
                
            },2000);

        }else{

            error.classList.add('display');
            setTimeout(function(){
                error.classList.remove('display');
            },5000);

        }
    });

    function validInput(billVal,splitVal,selectVal){

        error.innerHTML = '';

        var boolBill = (billVal?true:setErrorMessage('Place a bill value greater than zero'));
        var bollSplit = (splitVal?true:setErrorMessage('Enter the number of people who shared the Bill'));
        var boolSelect = ((selectVal)?true:setErrorMessage('Place a valid service review'));
        
        return boolBill && bollSplit && boolSelect; 
    }

    function setErrorMessage(errorMessage){

        error.innerHTML += `<p>${errorMessage}</p>`;
        return false;
    }

    function setResult(totalTip,totalAmount,quantSplit){

        load.classList.remove('display');
        result.classList.add('display');

        result.innerHTML = `
            <p>Total Tip:$${totalTip}</p>
            <p>Total Amount:$${totalAmount}</p>
            <p>Each Person Owes:$${quantSplit}</p>
        `;

        setTimeout(function(){
            result.classList.remove('display');
            form.reset();
        },10000);
    }

})();