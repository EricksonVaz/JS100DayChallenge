(function(){

    const formCalculate = document.querySelector('.calculate');
    const formExpenses = document.querySelector('.add-expense');

    let table = document.querySelector('table');
    let cards = document.querySelectorAll('.card');

    let currentBalance = 0;
    let currentExpenses = 0;

    function Expenses(){

        this.calculate = function(amount){

            this.amount = amount;

            currentBalance = this.amount - currentExpenses;

            cards[0].querySelector('.amount').innerHTML = `$ ${this.amount}`;
            cards[1].querySelector('.amount').innerHTML = `$ ${currentExpenses}`;
            cards[2].querySelector('.amount').innerHTML = `$ ${currentBalance}`;
        }

        this.addToList = function(title,value){

            currentExpenses += parseInt(value);
            currentBalance = this.amount - currentExpenses,

            table.insertAdjacentHTML('beforeend',`
                <tr>
                    <td>${title}</td>
                    <td>$ ${value}</td>
                    <td>
                        <span class="material-icons edit">
                            edit
                        </span>
                        <span class="material-icons delete">
                            delete
                        </span>
                    </td>
                </tr>
            `);
            let rows = table.querySelectorAll('tr');

            rows[rows.length-1].querySelectorAll('.material-icons').forEach((el)=>{
                if(el.classList.contains('edit')){
                    el.addEventListener('click',function(){
                        formExpenses[0].value = title;
                        formExpenses[1].value = value;

                        currentExpenses -= parseInt(value);
                        currentBalance += parseInt(value);

                        cards[1].querySelector('.amount').innerHTML = `$ ${parseInt(currentExpenses)}`;
                        cards[2].querySelector('.amount').innerHTML = `$ ${currentBalance}`;

                        el.parentElement.parentElement.remove();
                    });
                }else{
                    el.addEventListener('click',function(){
                        currentExpenses -= parseInt(value);
                        currentBalance += parseInt(value);

                        cards[1].querySelector('.amount').innerHTML = `$ ${parseInt(currentExpenses)}`;
                        cards[2].querySelector('.amount').innerHTML = `$ ${currentBalance}`;

                        el.parentElement.parentElement.remove();
                    });
                }

            })
            cards[1].querySelector('.amount').innerHTML = `$ ${parseInt(currentExpenses)}`;
            cards[2].querySelector('.amount').innerHTML = `$ ${parseInt(currentBalance)}`;

        }

        this.edit = function(title,value,element){
            formExpenses[0].value = title;
            formExpenses[1].value = value;

            currentExpenses -= value;
            currentBalance = this.amount - currentExpenses;

            cards[1].querySelector('.amount').innerHTML = `$ ${parseInt(currentExpenses)}`;
            cards[2].querySelector('.amount').innerHTML = `$ ${currentBalance}`;

            element.remove();
        }

        this.delete = function(element,value){
            currentExpenses -= value;
            currentBalance = this.amount - currentExpenses;

            cards[1].querySelector('.amount').innerHTML = `$ ${parseInt(currentExpenses)}`;
            cards[2].querySelector('.amount').innerHTML = `$ ${currentBalance}`;

            element.remove();
        }

    }

    let expeneses = new Expenses();

    expeneses.calculate(0)

    formCalculate.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(formCalculate[0].value===''){
            alert('Please ente with a valid value');
        }else{
            expeneses.calculate(formCalculate[0].value)
        }

        formCalculate.reset();
    });

    formExpenses.addEventListener('submit',(e)=>{
        e.preventDefault();

        if(formExpenses[0].value===''||formExpenses[1].value===''){
            alert('Please enter a valid value for name / amount expenses');
        }else{
            if(expeneses.amount==0){
                alert('Please enter a budget amount first');
            }else{
                expeneses.addToList(formExpenses[0].value,formExpenses[1].value);
            }
        }
        formExpenses.reset();
    });


})();