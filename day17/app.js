(function(){
    const btnAdd = document.querySelector('.btn-add');
    const btnCloseForm = document.querySelector('.close');
    const aside = document.querySelector('aside');
    const form = document.querySelector('form');
    const main = document.querySelector('main');

    var questions = eval(localStorage.getItem('questions'))==null?[]:eval(localStorage.getItem('questions'));

    loadUIList();
    

    function togleForm(){
        aside.classList.toggle('hidde');
    }


    function loadUIList(){

        if(questions.length!=0){

            main.innerHTML='';
            questions.forEach((item)=>{
                const card = new Card(item.question,item.answer);
                card.display();
            });

            let newArray = questions.map((item,index)=>{
                item.id=index;
                return item;
            });
            
            questions = newArray;
            localStorage.setItem('questions',JSON.stringify(questions));
        }
    }

    btnCloseForm.addEventListener('click',function(){

       togleForm();

    });
   
    btnAdd.addEventListener('click',function(){

       togleForm();

       form.dataset.action = 'create'

    });

    const formToSubmit = new FormQuestion();

    form.addEventListener('submit',function(e){

       e.preventDefault();
       formToSubmit.submit();
       formToSubmit.save();

    });

    function FormQuestion(){

        this.submit = function(){

            let values = [];
            this.isValid = true;

            form.querySelectorAll('textarea').forEach((item)=>{
                if(item.value===''){
                    this.isValid = false; 
                }
                values.push(item.value);
            });

            this.values = values;
        }

        this.save = function(){

            if(this.isValid){

                if(form.dataset.action==='create'){

                    const card = new Card(this.values[0],this.values[1]);

                    card.display();

                    card.addInLocalStorage();
                
                }else{

                    let newArray = questions.map((item)=>{
                        if(item.id==form.dataset.id){
                            item.question = this.values[0];
                            item.answer = this.values[1];
                        }
                        return item;
                    });

                    questions = newArray;
                    localStorage.setItem('questions',JSON.stringify(questions));
                    loadUIList();
                }

                form.reset();
                form.dataset.action ='create'

            }else{
                alert("Fill a valid Values for Questions / Answer")
            }
        }
    }

    function Card(question,answer){

        this.question = question;

        this.answer = answer;

        this.display = function(){
        
            main.insertAdjacentHTML('beforeend',`
                <div class="card">
                    <h3 class="title">${this.question}</h3>
                    <span class="hide-show">Show Answer/Hidden</span>
                    <p class="answer hidde">
                        ${this.answer}
                    </p>
                    <div class="buttons-group">
                        <button class="btn btn-edit">Edit</button>
                        <button class="btn btn-delete">Delete</button>
                    </div>
                </div>
            `);

            let cards = main.querySelectorAll('.card');
            this.element = cards[cards.length-1];
            this.id = cards.length-1;

            this.addAction();
        }

        this.addInLocalStorage = function(){

            questions.push({id:this.id,question:this.question,answer:this.answer})

            localStorage.setItem('questions',JSON.stringify(questions));
        }

        this.addAction = function(){

            this.element.querySelectorAll('.btn').forEach((el)=>{
                if(el.classList.contains('btn-edit')){
                    el.addEventListener('click',()=>this.edit());
                }else{
                    el.addEventListener('click',()=>this.delete())
                }
            });

            this.element.querySelector('.hide-show').addEventListener('click',()=>this.showHiddeAnswer());
        }

        this.showHiddeAnswer = function(){

            this.element.querySelector('.answer').classList.toggle('hidde');

        }

        this.edit = function(){

            form.dataset.action = 'edit';
            form.dataset.id = this.id;

            if(aside.classList.contains('hidde')){
                aside.classList.remove('hidde');
            }

            form.querySelector('#question').value = this.question;

            form.querySelector('#answer').value = this.answer;

        }

        this.delete = function(){

            console.log('ideDel',this.id)
            let newArray = questions.filter((item)=>{
                return item.id!==this.id;
            });

            localStorage.setItem('questions',JSON.stringify(newArray));

            questions = newArray;

            this.element.remove();
        }
    }

})();